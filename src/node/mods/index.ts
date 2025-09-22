export * from "../../wasm/pkg/memory_wasm.ts";

import init from "../../wasm/pkg/memory_wasm.ts";
import { data } from "../../wasm/pkg/memory_wasm.wasm.ts";

export async function initBundled() {
  return await init({ module_or_path: data })
}
