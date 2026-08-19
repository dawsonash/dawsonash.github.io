// Renders frame 0 of the favicon scene to public/favicon.svg (static fallback).
import { writeFileSync } from 'node:fs'
import {
  ART, BACK_RIDGE, FRONT_RIDGE, SKY, SUN, CLOUDS, INK, HAZE, SNOW, rowSpan,
} from '../src/favicon.js'

const out = []
const px = (x, y, w, h, fill) =>
  out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`)
const ridge = (tops, fill) => tops.forEach((t, c) => px(c, t, 1, ART - t, fill))
const clouds = (high) => {
  for (const c of CLOUDS) {
    if (!!c.high !== high) continue
    const span = ART + c.w
    px(Math.round((((c.x + c.w) % span) + span) % span - c.w), c.y, c.w, 1, c.fill)
  }
}

let top = 0
for (const band of SKY) { px(0, top, ART, band.until - top, band.fill); top = band.until }
px(SUN.x, SUN.y, SUN.size, SUN.size, SUN.fill)
clouds(true)
ridge(BACK_RIDGE, HAZE)
clouds(false)
ridge(FRONT_RIDGE, INK)
FRONT_RIDGE.forEach((peak, col) => { if (peak <= 9) px(col, peak, 1, 1, SNOW) })

// Same squircle mask as the animated version, one clip rect per row.
const clip = []
for (let row = 0; row < ART; row++) {
  const span = rowSpan(row)
  if (span) clip.push(`<rect x="${span[0]}" y="${row}" width="${span[1] - span[0] + 1}" height="1"/>`)
}

writeFileSync(
  new URL('../public/favicon.svg', import.meta.url),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ART} ${ART}" shape-rendering="crispEdges">` +
    `<clipPath id="sq">${clip.join('')}</clipPath>` +
    `<g clip-path="url(#sq)">${out.join('')}</g></svg>\n`
)
console.log('wrote public/favicon.svg')
