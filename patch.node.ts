import fs from "node:fs"

const slashes = "/..".repeat(process.env.npm_package_name!.split("/").length)

const original = fs.readFileSync("./out/wasm/Cargo.toml", "utf8")

const replaced = original.replaceAll("../../node_modules", `../..${slashes}`)

fs.writeFileSync("./out/wasm/Cargo.toml", replaced)