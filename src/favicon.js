/*
 * Animated favicon: a low-res pixel mountain range with clouds drifting
 * between the ridges, the way they sit on the Flatirons in the hero photo.
 *
 * Chrome ignores animated GIF favicons, so this repaints a 16x16 art grid onto
 * a 32x32 canvas and swaps the <link> href each frame instead.
 */

export const ART = 16 // logical art pixels per side — deliberately chunky
const CELL = 2 // device pixels per art pixel (16 * 2 = 32px favicon)
const FPS = 8

// Top row of each ridge, per column. Lower number = taller peak.
export const BACK_RIDGE = [10, 9, 8, 6, 5, 6, 7, 8, 7, 5, 4, 6, 7, 9, 10, 10]
export const FRONT_RIDGE = [13, 12, 11, 9, 10, 11, 10, 8, 9, 11, 12, 10, 9, 11, 12, 13]

// Sky bands, top down: richer up high, bright toward the horizon.
export const SKY = [
  { until: 3, fill: '#F6B37A' },
  { until: 6, fill: '#FBD3A0' },
  { until: ART, fill: '#FDEBCF' },
]

export const SUN = { x: 11, y: 2, size: 2, fill: '#FF4D17' }

// Each drifts at its own speed, which reads as parallax at this size.
export const CLOUDS = [
  { y: 4, x: 6, w: 3, speed: 0.28, fill: '#FFFDF8', high: true },
  { y: 7, x: 1, w: 5, speed: 0.22, fill: '#FFF7EA' },
  { y: 9, x: 8, w: 4, speed: 0.16, fill: '#FFF7EA' },
]

// Superellipse |x|^n + |y|^n = 1. Masked on the art grid, not the device
// grid, so the corners step in chunky pixels instead of antialiasing.
const SQUIRCLE_N = 3.4

// The shape is convex, so every row's visible cells are one contiguous span.
export function rowSpan(row) {
  const half = ART / 2
  const v = Math.abs((row + 0.5 - half) / half) ** SQUIRCLE_N
  let start = 0
  while (start < half && Math.abs((start + 0.5 - half) / half) ** SQUIRCLE_N + v > 1) start++
  return start >= half ? null : [start, ART - 1 - start]
}

export const INK = '#111110'
export const HAZE = '#6F6F68'
export const SNOW = '#F4F3EF'

export function startFavicon() {
  const canvas = document.createElement('canvas')
  canvas.width = ART * CELL
  canvas.height = ART * CELL
  const ctx = canvas.getContext('2d')

  const link = document.querySelector('link[rel="icon"]') || document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  if (!link.isConnected) document.head.appendChild(link)

  const px = (x, y, w, h, fill) => {
    ctx.fillStyle = fill
    ctx.fillRect(x * CELL, y * CELL, w * CELL, h * CELL)
  }

  const ridge = (tops, fill) => {
    tops.forEach((top, col) => px(col, top, 1, ART - top, fill))
  }

  const clouds = (offset, high) => {
    for (const cloud of CLOUDS) {
      if (!!cloud.high !== high) continue
      // Wrap through [-w, ART) so a cloud slides fully off one edge before
      // reappearing on the other; +w keeps the authored x as the start point.
      const span = ART + cloud.w
      const drift = cloud.x + cloud.w + offset * cloud.speed
      const x = ((drift % span) + span) % span - cloud.w
      px(Math.round(x), cloud.y, cloud.w, 1, cloud.fill)
    }
  }

  const draw = (frame) => {
    let top = 0
    for (const band of SKY) {
      px(0, top, ART, band.until - top, band.fill)
      top = band.until
    }
    px(SUN.x, SUN.y, SUN.size, SUN.size, SUN.fill)

    clouds(frame, true) // high cloud passes in front of the sun
    ridge(BACK_RIDGE, HAZE)
    clouds(frame, false) // low clouds nestle between the two ridges
    ridge(FRONT_RIDGE, INK)

    // Snow only on peaks that actually clear the cloud line.
    FRONT_RIDGE.forEach((peak, col) => {
      if (peak <= 9) px(col, peak, 1, 1, SNOW)
    })

    // Punch the scene down to a squircle, leaving the corners transparent.
    for (let row = 0; row < ART; row++) {
      const span = rowSpan(row)
      if (!span) {
        ctx.clearRect(0, row * CELL, ART * CELL, CELL)
        continue
      }
      ctx.clearRect(0, row * CELL, span[0] * CELL, CELL)
      ctx.clearRect((span[1] + 1) * CELL, row * CELL, (ART - 1 - span[1]) * CELL, CELL)
    }

    link.href = canvas.toDataURL('image/png')
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    draw(0)
    return () => {}
  }

  let frame = 0
  draw(frame)
  const timer = setInterval(() => draw(++frame), 1000 / FPS)
  return () => clearInterval(timer)
}
