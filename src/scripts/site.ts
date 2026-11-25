// Shared page behaviour: theme toggle, nav, email chooser, mobile menu,
// headline highlighters, scroll reveals and the next-section button.
const root = document.documentElement;
const still = root.classList.contains('still');
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Theme toggle
const btn = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const label = () => {
  if (!btn) return;
  const dark = root.getAttribute('data-theme') === 'dark';
  btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
};
label();
// Apply a theme in one frame: with transitions on, every surface fades on its own
// clock and the page passes through muddy in-between greys.
const applyTheme = (next: string) => {
  root.classList.add('theme-switch');
  root.setAttribute('data-theme', next);
  void root.offsetWidth;
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switch')));
  try { localStorage.setItem('theme', next); } catch (e) {}
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', next === 'dark' ? '#08080a' : '#ffffff'));
  label();
};
btn?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
  if (!doc.startViewTransition || calm || still) { applyTheme(next); return; }
  // The new theme grows out of the toggle as a circle until it covers the screen.
  const r = btn!.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  root.classList.add('theme-anim');
  const vt = doc.startViewTransition(() => applyTheme(next));
  vt.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' }
    ).finished.finally(() => root.classList.remove('theme-anim'));
  }).catch(() => root.classList.remove('theme-anim'));
});

// Nav: timeline progress, timecode, current-section underline, section skins,
// a floating pill once past the first section, and a logo that bounces with scroll speed.
const nav = document.querySelector<HTMLElement>('.nav');
const navAnchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'));
const pill = document.querySelector<HTMLElement>('.nav-pill');
const tlClip = document.querySelector<HTMLElement>('.tl-clip');
const tcClip = document.querySelector<HTMLElement>('.tc-clip');
const tcName = document.querySelector<HTMLElement>('.tc-name');
const tcTime = document.querySelector<HTMLElement>('.tc-time');
const mark = document.querySelector<SVGElement>('.nav .brand-mark');
const allSections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
const heroEl = allSections[0];
let navTick = false;
let lastPill: HTMLAnchorElement | null | undefined = null;
pill?.addEventListener('animationend', () => pill.classList.remove('move-r', 'move-l'));
const placePill = (a: HTMLAnchorElement | undefined, force = false) => {
  if (!pill || (!force && a === lastPill)) return;
  lastPill = a;
  if (!a) { pill.style.opacity = '0'; return; }
  const from = parseFloat(pill.dataset.x || 'NaN');
  pill.style.opacity = '1';
  // Span the word itself, not the link's side padding.
  const inset = parseFloat(getComputedStyle(a).paddingLeft) || 0;
  pill.style.width = Math.max(0, a.offsetWidth - inset * 2) + 'px';
  pill.style.transform = `translateX(${a.offsetLeft + inset}px)`;
  pill.dataset.x = String(a.offsetLeft);
  // Roll the wave only while it travels between links (not on first show or resize).
  if (!force && !Number.isNaN(from) && from !== a.offsetLeft) {
    pill.classList.remove('move-r', 'move-l');
    void pill.offsetWidth;
    pill.classList.add(a.offsetLeft > from ? 'move-r' : 'move-l');
  }
};
let activeLink: HTMLAnchorElement | undefined;
const syncNav = () => {
  navTick = false;
  if (!nav) return;
  const docH = document.documentElement.scrollHeight;
  const max = docH - window.innerHeight;
  const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  nav.style.setProperty('--p', p.toFixed(4));
  const h = nav.offsetHeight;
  // Skin by what sits under the bar itself (its middle, since the floating pill is shorter).
  const r = nav.querySelector<HTMLElement>('.nav-in')?.getBoundingClientRect();
  const mid = r ? r.top + r.height / 2 : h / 2;
  const under = allSections.find((el) => { const b = el.getBoundingClientRect(); return b.top <= mid && b.bottom > mid; });
  const skin = under?.dataset.tone || '';
  if (nav.dataset.skin !== skin) nav.dataset.skin = skin;
  if (heroEl) nav.classList.toggle('float', heroEl.getBoundingClientRect().bottom < h);
  // The current section is the one crossing 40% of the screen (or the last one at the bottom).
  const probe = window.innerHeight * 0.4;
  const atEnd = window.innerHeight + window.scrollY >= docH - 8;
  const current = atEnd ? allSections[allSections.length - 1] : allSections.find((el) => { const b = el.getBoundingClientRect(); return b.top <= probe && b.bottom > probe; });
  activeLink = undefined;
  navAnchors.forEach((a) => {
    const on = !!current && (a.dataset.for || '').split(' ').includes(current.id);
    a.classList.toggle('on', on);
    if (on) { a.setAttribute('aria-current', 'location'); activeLink = a; } else a.removeAttribute('aria-current');
  });
  placePill(activeLink);
  if (current) {
    const idx = allSections.indexOf(current);
    if (tcClip) tcClip.textContent = 'CLIP ' + String(idx + 1).padStart(2, '0');
    if (tcName) tcName.textContent = current.dataset.name || '';
    if (tlClip) {
      const top = current.offsetTop / docH, len = current.offsetHeight / docH;
      tlClip.style.left = (top * 100).toFixed(2) + '%';
      tlClip.style.width = (len * 100).toFixed(2) + '%';
    }
  }
  // Scroll position as a running time: one second per 40 px.
  const sec = Math.round(window.scrollY / 40);
  if (tcTime) tcTime.textContent = String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
};
// Logo equalizer: bars stretch with scroll speed, then settle.
let lastY = window.scrollY, lastT = performance.now(), target = 0, level = 0, eqRun = false;
const eq = () => {
  level += (target - level) * 0.2;
  target *= 0.86;
  mark?.style.setProperty('--v', level.toFixed(3));
  if (level > 0.004 || target > 0.004) requestAnimationFrame(eq);
  else { eqRun = false; mark?.style.setProperty('--v', '0'); }
};
const onNavScroll = () => {
  if (!calm && !still) {
    const now = performance.now(), dt = Math.max(1, now - lastT);
    target = Math.min(1, Math.max(target, Math.abs(window.scrollY - lastY) / dt / 3));
    lastY = window.scrollY; lastT = now;
    if (!eqRun) { eqRun = true; requestAnimationFrame(eq); }
  }
  if (!navTick) { navTick = true; requestAnimationFrame(syncNav); }
};
syncNav();
window.addEventListener('scroll', onNavScroll, { passive: true });
window.addEventListener('resize', () => { syncNav(); placePill(activeLink, true); });
document.fonts?.ready.then(() => { syncNav(); placePill(activeLink, true); });

// Mobile menu sheet
const sheet = document.querySelector<HTMLElement>('#sheet');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const openMenu = () => {
  if (!sheet || !menuBtn) return;
  sheet.hidden = false;
  requestAnimationFrame(() => sheet.classList.add('open'));
  menuBtn.setAttribute('aria-expanded', 'true');
  root.classList.add('menu-open');
  sheet.querySelector<HTMLElement>('[data-menu-close]')?.focus();
};
const closeMenu = (restore = true) => {
  if (!sheet || !menuBtn || sheet.hidden) return;
  sheet.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  root.classList.remove('menu-open');
  setTimeout(() => { sheet.hidden = true; }, calm ? 0 : 300);
  if (restore) menuBtn.focus();
};
menuBtn?.addEventListener('click', openMenu);
sheet?.querySelector('[data-menu-close]')?.addEventListener('click', () => closeMenu());
sheet?.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', () => closeMenu(false)));
document.addEventListener('keydown', (e) => {
  if (!sheet || sheet.hidden) return;
  if (e.key === 'Escape') { closeMenu(); return; }
  if (e.key !== 'Tab') return;
  // Keep focus inside the open sheet.
  const f = Array.from(sheet.querySelectorAll<HTMLElement>('a, button'));
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
window.matchMedia('(min-width: 961px)').addEventListener('change', (m) => { if (m.matches) closeMenu(false); });

// Email chooser: mailto always opens the system's default app (often Outlook), so
// offer webmail compose links and a copy button instead. Without JS, mailto still works.
const pick = document.querySelector<HTMLElement>('#mailpick');
let pickFrom: HTMLElement | null = null;
const closePick = (restore = false) => {
  if (!pick || pick.hidden) return;
  pick.hidden = true;
  pickFrom?.setAttribute('aria-expanded', 'false');
  if (restore) pickFrom?.focus();
};
const openPick = (from: HTMLElement) => {
  if (!pick) return;
  pickFrom = from;
  pick.hidden = false;
  const r = from.getBoundingClientRect();
  const w = pick.offsetWidth, h = pick.offsetHeight, gap = 8;
  const left = Math.min(Math.max(8, r.left), window.innerWidth - w - 8);
  const below = r.bottom + gap + h <= window.innerHeight;
  pick.style.left = left + 'px';
  pick.style.top = (below ? r.bottom + gap : Math.max(8, r.top - gap - h)) + 'px';
  from.setAttribute('aria-expanded', 'true');
  pick.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
};
document.querySelectorAll<HTMLAnchorElement>('[data-mail]').forEach((a) => {
  a.setAttribute('aria-expanded', 'false');
  a.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (sheet && !sheet.hidden) closeMenu(false);
    if (pick && !pick.hidden && pickFrom === a) closePick();
    else openPick(a);
  });
});
pick?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => closePick()));
pick?.querySelector<HTMLButtonElement>('[data-copy]')?.addEventListener('click', async (e) => {
  const b = e.currentTarget as HTMLButtonElement;
  try { await navigator.clipboard.writeText(b.dataset.copy || ''); b.textContent = 'Copied ✓'; }
  catch { b.textContent = 'Copy failed'; }
  setTimeout(() => { b.textContent = 'Copy address'; closePick(true); }, 900);
});
document.addEventListener('click', (e) => { if (pick && !pick.hidden && !pick.contains(e.target as Node)) closePick(); });
document.addEventListener('keydown', (e) => {
  if (!pick || pick.hidden) return;
  if (e.key === 'Escape') { closePick(true); return; }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const items = Array.from(pick.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    const i = items.indexOf(document.activeElement as HTMLElement);
    items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
  }
  if (e.key === 'Tab') closePick();
});
window.addEventListener('scroll', () => closePick(), { passive: true });
window.addEventListener('resize', () => closePick());

// Headline hook words and [data-reveal] blocks: mark them .in when they come into view.
const revealables = document.querySelectorAll<HTMLElement>('.hook, [data-reveal]');
if ('IntersectionObserver' in window && !still) {
  const rio = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -20% 0px' });
  revealables.forEach((h) => rio.observe(h));
} else revealables.forEach((h) => h.classList.add('in'));

// Next-section / back-to-top button
const jump = document.querySelector<HTMLButtonElement>('[data-jump]');
const atBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
const syncJump = () => {
  if (!jump) return;
  const up = atBottom();
  jump.classList.toggle('up', up);
  const jr = jump.getBoundingClientRect();
  const probe = jr.top + jr.height / 2;
  const under = allSections.find((el) => { const b = el.getBoundingClientRect(); return b.top <= probe && b.bottom > probe; });
  const tone = under?.dataset.tone || 'ground';
  if (jump.dataset.tone !== tone) jump.dataset.tone = tone;
  jump.setAttribute('aria-label', up ? 'Back to top' : 'Go to next section');
};
let anim = 0;
const glide = (to: number) => {
  cancelAnimationFrame(anim);
  const from = window.scrollY;
  const dist = to - from;
  if (calm || Math.abs(dist) < 2) { window.scrollTo({ top: to, behavior: 'instant' as ScrollBehavior }); return; }
  const dur = Math.min(700, 280 + Math.abs(dist) * 0.08);
  const t0 = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - t0) / dur);
    const e = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    window.scrollTo({ top: from + dist * e, behavior: 'instant' as ScrollBehavior });
    if (t < 1) anim = requestAnimationFrame(step);
  };
  anim = requestAnimationFrame(step);
};
let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { syncJump(); ticking = false; });
};
if (jump) {
  syncJump();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  ['wheel', 'touchstart', 'keydown'].forEach((ev) => window.addEventListener(ev, () => cancelAnimationFrame(anim), { passive: true }));
  jump.addEventListener('click', () => {
    if (atBottom()) { glide(0); return; }
    const offset = 72;
    const next = allSections.find((el) => el.getBoundingClientRect().top > offset + 8);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    glide(next ? Math.min(max, next.getBoundingClientRect().top + window.scrollY - offset) : max);
  });
}
