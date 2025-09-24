# memory.wasm

Zero-copy memory for WebAssembly

```bash
npm install @hazae41/memory.wasm
```

```bash
deno install jsr:@hazae41/memory-wasm
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/memory.wasm) • [**📦 JSR**](https://jsr.io/@hazae41/memory-wasm)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Usage

```typescript
import { ExampleWasm, Memory, example_method } from "@hazae41/example.wasm";

// Wait for initialization
await ExampleWasm.initBundled();

// Pass bytes to memory
using memory = new Memory();

// View bytes from memory
console.log(memory.bytes)

// Call method with 0-copy
example_method(memory)
```

## Building

### Reproducible building

You can build the exact same bytecode using Docker

```bash
npm run compile
```

Then check that all the files are the same using `npm diff`

```bash
npm diff
```

If the output is empty then the bytecode is the same as the one I published on NPM.

### Automated checks

Each time I release a new version on GitHub, the GitHub's CI clones the GitHub repository, reproduces the build, and throws an error if the NPM release is different. If a version is present on NPM but not on GitHub, do not use it!
