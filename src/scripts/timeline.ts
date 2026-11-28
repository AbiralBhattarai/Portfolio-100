// Looping timelines for the project graphics, the same idea as SectraLoop:
// JS only advances time; CSS turns the numbers into positions and opacities.
//
//   <div data-timeline data-period="6000" data-rest="0.85" data-out="0.9">
//     <span data-at="0.1,0.25">…</span>
//
// Every [data-at="a,b"] inside gets --on, easing 0 → 1 between a and b, then
// everything fades back together from data-out to the end of the loop.
// Under reduced motion or ?still the timeline stops at data-rest, where the
// whole graphic is visible. It only runs while it is on screen.
const root = document.documentElement;
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches || root.classList.contains('still');
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (v: number) => 0.5 - Math.cos(Math.PI * clamp(v)) / 2;

document.querySelectorAll<HTMLElement>('[data-timeline]').forEach((el) => {
  const T = Number(el.dataset.period || 6000);
  const rest = Number(el.dataset.rest || 0.85);
  const outAt = Number(el.dataset.out || 0.9);
  const parts = Array.from(el.querySelectorAll<HTMLElement>('[data-at]')).map((n) => {
    const [a, b] = (n.dataset.at || '0,1').split(',').map(Number);
    return { n, a, b, hold: n.hasAttribute('data-hold') };
  });

  const draw = (p: number) => {
    const out = ease((p - outAt) / (1 - outAt));
    el.style.setProperty('--p', p.toFixed(4));
    el.style.setProperty('--out', out.toFixed(4));
    for (const { n, a, b, hold } of parts) {
      const v = ease((p - a) / (b - a)) * (hold ? 1 : 1 - out);
      n.style.setProperty('--on', v.toFixed(4));
    }
  };

  if (calm) { draw(rest); return; }

  let raf = 0, start = 0, offset = 0, running = false;
  const frame = (now: number) => {
    draw(((now - start + offset) % T) / T);
    raf = requestAnimationFrame(frame);
  };
  draw(0);
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !running) {
      running = true;
      start = performance.now();
      raf = requestAnimationFrame(frame);
    } else if (!e.isIntersecting && running) {
      running = false;
      cancelAnimationFrame(raf);
      offset = (offset + performance.now() - start) % T;
    }
  }, { threshold: 0.25 }).observe(el);
});
