FROM rust:1.95.0

RUN rustup target add wasm32-unknown-unknown

RUN cargo install wasm-bindgen-cli --version 0.2.100 --locked

CMD cd /app/src/wasm && cargo build --target wasm32-unknown-unknown --release && wasm-bindgen --target web --out-dir ./pkg ./target/wasm32-unknown-unknown/release/memory_wasm.wasm