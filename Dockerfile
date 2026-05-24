FROM rust:1.95.0

WORKDIR /app

RUN apt update

WORKDIR ./src/wasm

RUN cargo install wasm-bindgen-cli --version 0.2.100 --locked

CMD cargo build --target wasm32-unknown-unknown --release

CMD wasm-bindgen --target web --out-dir ./pkg ./target/wasm32-unknown-unknown/release/memory_wasm.wasm