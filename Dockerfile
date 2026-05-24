FROM rust:1.95.0

RUN rustup target add wasm32-unknown-unknown

RUN cargo install wasm-tools --version 1.250.0 --locked

RUN cargo install wasm-bindgen-cli --version 0.2.100 --locked

ENV SOURCE_DATE_EPOCH=0

CMD cd /app/src/wasm && cargo clean && cargo build --target wasm32-unknown-unknown --release --locked && wasm-bindgen --target web --out-dir ./pkg ./target/wasm32-unknown-unknown/release/memory_wasm.wasm && wasm-tools strip --all ./pkg/memory_wasm_bg.wasm -o ./pkg/memory_wasm_bg.wasm