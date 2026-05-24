export * from "../../wasm/pkg/daemon.js";

/* @ts-types="../../wasm/pkg/daemon.d.ts" */
import init, { initSync, type InitOutput } from "../../wasm/pkg/daemon.js";
import { data } from "../../wasm/pkg/daemon.wasm.js";

export async function load(): Promise<InitOutput> {
  return await init({ module_or_path: data })
}

export function loadSync(): InitOutput {
  return initSync({ module_or_path: data });
}
