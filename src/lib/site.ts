// The site is served from GitHub Pages under /Portfolio-100, so every internal link
// and file path goes through to(), which adds that base.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const to = (path: string) => BASE + path;
export const SITE = 'https://abiralbhattarai.github.io' + BASE;

export const EMAIL = 'abiralbh.101@gmail.com';
export const CV = to('/abiral-bhattarai-cv.pdf');
export const GITHUB = 'https://github.com/abiralbhattarai';
export const LINKEDIN = 'https://www.linkedin.com/in/abiral-bhattarai/';
export const SECTRA = 'https://github.com/AbiralBhattarai/sectra';
export const AGENT = 'https://github.com/AbiralBhattarai/marketing_agent';
export const PAPER = 'https://doi.org/10.3126/jacem.v11i1.84250';

// Deterministic waveform: speech regions are loud and textured, gaps are low.
export function wave(n: number, speech: [number, number][], seed: number) {
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: n }, (_, i) => {
    const inSpeech = speech.some(([a, b]) => i >= a && i <= b);
    const base = inSpeech
      ? 0.35 + 0.45 * Math.abs(Math.sin(i * 0.37)) * (0.6 + 0.4 * rnd()) + 0.2 * rnd()
      : 0.05 + 0.08 * rnd();
    return { h: Math.min(1, base), sp: inSpeech };
  });
}

export const ghIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';
export const inIcon = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M5 7.25v4.25M8 11.5V7.25m0 2.25a2 2 0 0 1 4 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="5" cy="4.9" r="0.95" fill="currentColor"/></svg>';
export const arrow = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export const right = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export const mailIcon = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.75" stroke="currentColor" stroke-width="1.5"/><path d="m2.5 4.5 5.5 4.25 5.5-4.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
export const dlIcon = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 1.75h5.25L12.5 5v9.25H4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 1.75V5.25h3.5M6.25 8.5h4M6.25 11h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
