FROM rust:1.95.0

WORKDIR /app

RUN apt update

RUN cargo install wasm-pack --version v0.15.0 --locked

CMD wasm-pack build --target web --release ./src/wasm