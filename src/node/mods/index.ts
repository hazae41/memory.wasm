export * from "../../wasm/pkg/memory_wasm.js";

import init from "../../wasm/pkg/memory_wasm.js";
import { data } from "../../wasm/pkg/memory_wasm.wasm.js";

export async function initBundled() {
  return await init({ module_or_path: data })
}
