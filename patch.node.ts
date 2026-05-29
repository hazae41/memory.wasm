import fs from "node:fs"

const { name } = JSON.parse(fs.readFileSync("./package.json", "utf8"))

const patched = fs.readFileSync("./out/wasm/Cargo.toml", "utf8")
  .replaceAll("daemon", name.split("/")[1].replaceAll("-", "_"))
  .replaceAll("../../node_modules", `../..${"/..".repeat(name.split("/").length)}`)

fs.writeFileSync("./out/wasm/Cargo.toml", patched)