FROM rust:1.95.0

RUN rustup target add wasm32-unknown-unknown

RUN cargo install wasm-tools --version 1.250.0 --locked

RUN cargo install wasm-bindgen-cli --version 0.2.100 --locked

CMD cd /app/src/wasm \
    && cargo clean \
    && cargo build --target wasm32-unknown-unknown --release --locked \
    && wasm-bindgen --target web --out-dir ./out ./target/wasm32-unknown-unknown/release/daemon.wasm \
    && wasm-tools strip --all ./out/daemon_bg.wasm -o ./out/daemon_bg.wasm