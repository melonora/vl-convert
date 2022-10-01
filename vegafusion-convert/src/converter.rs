use crate::module_loader::import_map::VlVersion;
use crate::module_loader::VegaFusionModuleLoader;
use deno_core::error::AnyError;
use deno_core::{serde_v8, v8, JsRuntime, RuntimeOptions};
use std::rc::Rc;

pub struct VlConverter {
    js_runtime: JsRuntime,
}

impl VlConverter {
    pub async fn try_new(vl_version: VlVersion) -> Result<Self, AnyError> {
        let module_loader = Rc::new(VegaFusionModuleLoader::new());
        let mut js_runtime = JsRuntime::new(RuntimeOptions {
            module_loader: Some(module_loader),
            ..Default::default()
        });

        // Imports
        js_runtime
            .execute_script(
                "<anon>",
                &format!(
                    r#"
var vl;
import('{vl_url}').then((imported) => {{
    vl = imported;
}})
"#,
                    vl_url = vl_version.to_url()
                ),
            )
            .expect("Failed to import vega-lite");

        js_runtime.run_event_loop(false).await?;

        // Define functions
        js_runtime
            .execute_script(
                "<anon>",
                r#"
function compileVegaLite(vlSpec) {
    let options = {};
    let vgSpec = vl.compile(vlSpec, options).spec;
    return JSON.stringify(vgSpec)
}"#,
            )
            .expect("Failed to import vega-lite");
        js_runtime.run_event_loop(false).await?;

        Ok(Self { js_runtime })
    }

    pub async fn compile_vegalite(
        &mut self,
        vl_spec: &serde_json::Value,
    ) -> Result<String, AnyError> {
        let vl_spec_str = serde_json::to_string(vl_spec)?;
        let res = self
            .js_runtime
            .execute_script(
                "<anon>",
                &format!(
                    r#"
compileVegaLite(
    {vl_spec_str}
)
"#,
                    vl_spec_str = vl_spec_str
                ),
            )
            .unwrap();

        self.js_runtime.run_event_loop(false).await?;

        let scope = &mut self.js_runtime.handle_scope();
        let local = v8::Local::new(scope, res);

        // Deserialize a `v8` object into a Rust type using `serde_v8`,
        // in this case deserialize to a JSON `Value`.
        let deserialized_value = serde_v8::from_v8::<serde_json::Value>(scope, local);

        let value = deserialized_value.unwrap().as_str().unwrap().to_string();
        Ok(value)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_convert_context() {
        let mut ctx = VlConverter::try_new(VlVersion::v4_17).await.unwrap();
        let vl_spec: serde_json::Value = serde_json::from_str(r##"
{
    "data": {"url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/seattle-weather.csv"},
    "mark": "bar",
    "encoding": {
        "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
        "y": {"aggregate": "mean", "field": "precipitation"}
    }
}
        "##).unwrap();

        let vg_spec = ctx.compile_vegalite(&vl_spec).await.unwrap();
        println!("vg_spec: {}", vg_spec)
    }
}