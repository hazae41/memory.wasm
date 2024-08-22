import { Memory } from "./mods/index.js";

export * from "./mods/index.js";
export * as MemoryWasm from "./mods/index.js";

using memory = new Memory(new Uint8Array([1, 2, 3]))
