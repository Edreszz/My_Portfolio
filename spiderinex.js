document.addEventListener('DOMContentLoaded', function () {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const overlay = document.createElementNS(SVG_NS, 'svg');
  overlay.id = 'spider-overlay';
  overlay.setAttribute('width', '100%');
  overlay.setAttribute('height', '100%');
  overlay.style.pointerEvents = 'none';
  document.body.appendChild(overlay);

  const DRAW_MS = 4000;           // target full-draw time (~4s)
  const DRAW_DURATION = Math.floor(DRAW_MS * 0.9); // actual stroke animation length
  const totalLifetime = DRAW_MS + 1200; // keep visible briefly after draw
  const REST_MS = 3000;

  let lastX = null;
  let lastY = null;
  let isPointerInside = true;
  let autoSpawnTimer = null;
  let cooldown = false;

  function clearWebs() {
    overlay.querySelectorAll('g').forEach(g => g.remove());
  }

  function scheduleAutoSpawn() {
    if (autoSpawnTimer) {
      clearTimeout(autoSpawnTimer);
      autoSpawnTimer = null;
    }
    if (isPointerInside && lastX !== null && lastY !== null) {
      autoSpawnTimer = setTimeout(() => createWeb(lastX, lastY, true), REST_MS);
    }
  }

  function createElement(tag) {
    return document.createElementNS(SVG_NS, tag);
  }

  // create + animate web centered at (cx, cy)
  function createWeb(cx, cy, fromAuto = false) {
    clearWebs();
    if (autoSpawnTimer) { clearTimeout(autoSpawnTimer); autoSpawnTimer = null; }

    const group = createElement('g');
    group.classList.add('web-group');
    group.setAttribute('transform', `translate(${cx}, ${cy})`);
    overlay.appendChild(group);

    const spokes = 12;
    const rings = 5;
    const maxR = Math.min(window.innerWidth, window.innerHeight) * 0.18;
    const strokeColor = 'rgba(255,255,255,0.14)';
    const easing = 'cubic-bezier(.2,.9,.25,1)';

    // create radial spokes
    for (let i = 0; i < spokes; i++) {
      const angle = (Math.PI * 2 * i) / spokes;
      const x2 = Math.cos(angle) * maxR;
      const y2 = Math.sin(angle) * maxR;
      const line = createElement('line');
      line.setAttribute('x1', '0');
      line.setAttribute('y1', '0');
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.setAttribute('stroke', strokeColor);
      line.setAttribute('stroke-width', '1');
      line.setAttribute('stroke-linecap', 'round');
      group.appendChild(line);

      // prepare dash values immediately
      const len = Math.hypot(x2, y2);
      line.style.strokeDasharray = String(len);
      line.style.strokeDashoffset = String(len);

      // compute a small stagger so spokes start slightly offset but finish by DRAW_MS
      const delay = (i / Math.max(1, spokes - 1)) * (DRAW_MS * 0.06); // up to ~6% DRAW_MS
      line.style.transition = `stroke-dashoffset ${DRAW_DURATION}ms ${easing} ${delay}ms`;
    }

    // create concentric rings (paths)
    for (let r = 1; r <= rings; r++) {
      const radius = (maxR * r) / (rings + 0.5);
      let d = '';
      for (let s = 0; s < spokes; s++) {
        const angle = (Math.PI * 2 * s) / spokes;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        d += (s === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
      }
      d += ' Z';
      const path = createElement('path');
      path.setAttribute('d', d);
      path.setAttribute('stroke', strokeColor);
      path.setAttribute('stroke-width', '1');
      path.setAttribute('fill', 'none');
      group.appendChild(path);

      // synchronously set dash values after appended
      try {
        const L = path.getTotalLength();
        path.style.strokeDasharray = String(L);
        path.style.strokeDashoffset = String(L);

        // ring delay increases with r so outer rings start slightly later but finish by DRAW_MS
        const ringDelay = (r / Math.max(1, rings)) * (DRAW_MS * 0.12); // up to ~12% DRAW_MS
        path.style.transition = `stroke-dashoffset ${DRAW_DURATION}ms ${easing} ${ringDelay}ms`;
      } catch (err) {
        // ignore; fallback handled below
      }
    }

    // force layout & trigger transitions in next frame for reliable animations
    requestAnimationFrame(() => {
      // second RAF to ensure transitions are applied properly across browsers
      requestAnimationFrame(() => {
        group.querySelectorAll('line, path').forEach(el => {
          el.style.strokeDashoffset = '0';
        });
      });
    });

    // mark cooldown while web visible
    cooldown = true;

    // remove and schedule next spawn after lifetime
    setTimeout(() => {
      group.style.transition = 'opacity 600ms ease';
      group.style.opacity = '0';
      setTimeout(() => {
        group.remove();
        cooldown = false;
        scheduleAutoSpawn();
      }, 700);
    }, totalLifetime);
  }

  // update last mouse position; create first web if none visible
  document.addEventListener('mousemove', (e) => {
    if (e.clientX < 0 || e.clientY < 0) return;
    lastX = e.clientX;
    lastY = e.clientY;
    if (!cooldown && !overlay.querySelector('g')) {
      createWeb(lastX, lastY);
    }
  });

  document.addEventListener('pointerenter', (e) => {
    isPointerInside = true;
    if (!cooldown && !overlay.querySelector('g')) {
      lastX = e.clientX || window.innerWidth / 2;
      lastY = e.clientY || window.innerHeight / 2;
      createWeb(lastX, lastY);
    }
  });

  document.addEventListener('pointerleave', () => {
    isPointerInside = false;
    if (autoSpawnTimer) { clearTimeout(autoSpawnTimer); autoSpawnTimer = null; }
  });

  window.addEventListener('resize', () => {
    overlay.querySelectorAll('g').forEach(g => g.remove());
    if (autoSpawnTimer) { clearTimeout(autoSpawnTimer); autoSpawnTimer = null; }
  });
});


