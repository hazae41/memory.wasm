import { execSync } from "node:child_process";

execSync("rustup target add wasm32-unknown-unknown", { stdio: "inherit" })

execSync("cargo install wasm-tools --version 1.250.0 --locked", { stdio: "inherit" })

execSync("cargo install wasm-bindgen-cli --version 0.2.100 --locked", { stdio: "inherit" })
