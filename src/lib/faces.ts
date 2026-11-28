// A coarse grayscale "face", drawn from a seed in the spirit of the Olivetti
// set the face-matching model was trained on. These are generated pixels, never
// a real photograph. Shared by the project page's figure and the home poster.
export const FACE_GRID = 16;

export function pixelFace(seed: number, shift = 0, light = 0, G = FACE_GRID) {
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const px: number[] = [];
  for (let y = 0; y < G; y++) {
    for (let x = 0; x < G; x++) {
      const cx = 7.5 + shift, cy = 8.4;
      const dx = (x - cx) / 5.4, dy = (y - cy) / 7;
      const r = dx * dx + dy * dy;
      let v = 0.1 + rnd() * 0.05;
      if (r < 1) {
        v = 0.56 + 0.2 * (1 - r) + rnd() * 0.06 + light;
        if (y <= 3) v = 0.2 + rnd() * 0.06;
        if (y === 5 && (Math.abs(x - (cx - 2.4)) < 1.5 || Math.abs(x - (cx + 2.4)) < 1.5)) v -= 0.22;
        if (y === 7 && (Math.abs(x - (cx - 2.4)) < 0.8 || Math.abs(x - (cx + 2.4)) < 0.8)) v = 0.16;
        if ((y === 9 || y === 10) && Math.abs(x - cx) < 0.9) v -= 0.14;
        if (y === 12 && Math.abs(x - cx) < 2.1) v = 0.28 + rnd() * 0.05;
      } else if (r < 1.3 && y < 7) {
        v = 0.22 + rnd() * 0.05;
      }
      px.push(Math.min(0.95, Math.max(0.04, v)));
    }
  }
  return px;
}

export const gray = (v: number) => {
  const c = Math.round(v * 255);
  return `rgb(${c},${c},${c})`;
};
