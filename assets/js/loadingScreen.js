// ...existing code...
(function () {
  const SPLASH_DURATION = 1000; // ms
  // <-- updated to use your GIF (place spiderGif.gif at assets/images/)
  const SPIDER_SRC = 'assets/images/spiderGif.gif';

  function createSplash() {
    let overlay = document.getElementById('splash-overlay');
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.id = 'splash-overlay';

    const img = document.createElement('img');
    img.className = 'splash-img';
    img.src = SPIDER_SRC;
    img.alt = 'spider';
    overlay.appendChild(img);

    document.body.appendChild(overlay);
    return overlay;
  }

  function showSplash(duration = SPLASH_DURATION) {
    const overlay = createSplash();
    overlay.classList.add('visible');
    // prevent page scroll while visible
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return new Promise((resolve) => {
      setTimeout(() => {
        overlay.classList.remove('visible');
        document.documentElement.style.overflow = prevOverflow || '';
        resolve();
      }, duration);
    });
  }

  // show on each load/refresh
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => showSplash(), 80);
  });

  // show on clicks to header/main-logo (and intercept navigation to show splash first)
  document.addEventListener('click', function (e) {
    const target = e.target;
    const logoEl = target.closest('.main-logo, .edris-logo, .title-logo, .header-sticky');
    if (!logoEl) return;

    const anchor = target.closest('a');
    if (anchor && anchor.getAttribute('href') && !anchor.getAttribute('href').startsWith('#') && !anchor.getAttribute('href').startsWith('javascript:')) {
      e.preventDefault();
      showSplash(SPLASH_DURATION).then(() => {
        window.location.href = anchor.href;
      });
      return;
    }

    // no navigation: just show the splash
    showSplash(SPLASH_DURATION);
  }, { passive: false });
})();
/* ...existing code... */

