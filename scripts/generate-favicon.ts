/**
 * Regenerates public/favicon.png and public/apple-touch-icon.png.
 * Run with: bun scripts/generate-favicon.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import wawoff2 from "wawoff2";

const CREAM = "#f0eee6";
const CELADON = "#86B07E";
const FONT_PATH = resolve(import.meta.dirname, "../public/fonts/MoleniloLow.woff2");
// Satori's opentype parser only handles TTF/OTF/WOFF, so decompress WOFF2 first.
const FONT_BUFFER = Buffer.from(await wawoff2.decompress(readFileSync(FONT_PATH)));

const outputs = [
  { file: "public/favicon.png", size: 512 },
  { file: "public/apple-touch-icon.png", size: 180 },
];

for (const { file, size } of outputs) {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
          color: CELADON,
          fontFamily: "MoleniloLow",
          fontSize: Math.round(size * 0.72),
          lineHeight: 1,
          letterSpacing: size * 0.06,
        },
        children: "BB",
      },
    },
    {
      width: size,
      height: size,
      fonts: [{ name: "MoleniloLow", data: FONT_BUFFER, weight: 400, style: "normal" }],
    },
  );

  const png = new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
  const out = resolve(import.meta.dirname, "..", file);
  writeFileSync(out, png);
  console.log(`wrote ${file} (${size}×${size}, ${png.length} bytes)`);
}
