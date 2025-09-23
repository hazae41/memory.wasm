export * from "../../wasm/pkg/memory_wasm.js";

/* @ts-types="../../wasm/pkg/memory_wasm.d.ts" */
import init, { type InitOutput } from "../../wasm/pkg/memory_wasm.js";
import { data } from "../../wasm/pkg/memory_wasm.wasm.js";

export async function initBundled(): Promise<InitOutput> {
  return await init({ module_or_path: data })
}
