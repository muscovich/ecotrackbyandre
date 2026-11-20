import { execFileSync } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
await rm("release", { recursive: true, force: true });
await mkdir("release", { recursive: true });
execFileSync("zip", ["-qr", "release/EcoTrack-web.zip", "dist"]);
console.log("Created release/EcoTrack-web.zip");
