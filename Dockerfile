FROM rust:1.95.0

WORKDIR /app

RUN apt update

RUN cargo install wasm-pack

CMD wasm-pack build --target web --release ./src/wasm