FROM rust:1.90.0

WORKDIR /app

RUN apt update

RUN cargo install --locked wasm-pack

CMD wasm-pack build --target web --release ./src/wasm