document.addEventListener('DOMContentLoaded', function() {
            const playButton = document.getElementById('play-button');
            const videoFrame = document.getElementById('video-frame');
            
            playButton.addEventListener('click', function() {
                // Load the YouTube video with parameters to disable related videos
                videoFrame.src = "https://www.youtube.com/embed/6A7Rbl_FKMU?autoplay=1&rel=0&modestbranding=1";
                
                // Hide the play button after a short delay
                setTimeout(() => {
                    playButton.classList.add('hidden');
                }, 300);
            });
        });



                                               //////////// SlIDE CONTENT PART EDUCATION AND EXPERIENCE/////////////////////////////////////


function showContent(section, tabElement) {
                                                         // Hide all sections and remove active from tabs
  document.querySelectorAll('.edu-exp-detail').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

                                                         // Show selected section and set active tab
  document.getElementById(section).style.display = 'block';
  tabElement.classList.add('active'); 
}

                                                       // Show only the active section on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.edu-exp-detail').forEach(el => {
    el.style.display = el.classList.contains('active') ? 'block' : 'none';
  });
});


                                                           // CHANGE BORDER AND BACKGROUND COLOR OF TABS WHEN CLICKED
const experienceBTN = document.querySelector('#experience-tab');
const educationBTN = document.querySelector('#education-tab');

    educationBTN.addEventListener('click', function() {
        if(educationBTN.classList.contains('active')) {
            educationBTN.style.border=``;
            educationBTN.style.backgroundColor = '#2a2c39';
        }
        else {
             if(!experienceBTN.classList.contains('active')) {
                educationBTN.style.border=`0.5px solid #686565`;
                educationBTN.style.backgroundColor = '#252734';
             }
        }
    });


                                               // SCROLL TOP BTN 
 const backToTopButton = document.getElementById('backToTop');
        
        // Show button when user scrolls down 300px
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    var menu = this.nextElementSibling;
    if (menu) menu.classList.toggle('show');
  });
});

document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  document.querySelector('.mobile-menu-container').classList.toggle('show');
});




////// RATING STAR LOCAL Storage

  const stars = document.querySelectorAll('input[name="rating"]');
  const ratingText = document.getElementById('ratingText');

  // Load saved rating from localStorage
  const savedRating = localStorage.getItem('userRating');
  if (savedRating) {
    document.getElementById(`star${savedRating}`).checked = true;
    ratingText.textContent = `You rated this ${savedRating} star${savedRating > 1 ? 's' : ''}!`;
  }

  // Save rating when clicked
  stars.forEach(star => {
    star.addEventListener('change', () => {
      localStorage.setItem('userRating', star.value);
      ratingText.textContent = `You rated this ${star.value} star${star.value > 1 ? 's' : ''}!`;
    });
  });


  
  const starsSecond = document.querySelectorAll('input[name="rating"]');
  const ratingTextSecond = document.getElementById('ratingText');

  // Load saved rating from localStorage
  const savedRatingSecond = localStorage.getItem('userRating');
  if (savedRatingSecond) {
    document.getElementById(`star${savedRatingSecond}`).checked = true;
    ratingTextSecond.textContent = `You rated this ${savedRatingSecond} star${savedRatingSecond > 1 ? 's' : ''}!`;
  }

  // Save rating when clicked
  starsSecond.forEach(star => {
    star.addEventListener('change', () => {
      localStorage.setItem('userRating', star.value);
      ratingTextSecond.textContent = `You rated this ${star.value} star${star.value > 1 ? 's' : ''}!`;
    });
  });


  // replace previous "RATING STAR LOCAL Storage" block with this:
function initRating(groupName, storageKey, labelId) {
  const stars = document.querySelectorAll(`input[name="${groupName}"]`);
  const ratingLabel = document.getElementById(labelId);
  if (!stars || stars.length === 0) return;

  // restore saved value
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    const savedInput = document.querySelector(`input[name="${groupName}"][value="${saved}"]`);
    if (savedInput) savedInput.checked = true;
    if (ratingLabel) ratingLabel.textContent = `You rated this ${saved} star${saved > 1 ? 's' : ''}!`;
  }

  stars.forEach(star => {
    star.addEventListener('change', () => {
      localStorage.setItem(storageKey, star.value);
      if (ratingLabel) ratingLabel.textContent = `You rated this ${star.value} star${star.value > 1 ? 's' : ''}!`;
    });
  });
}
document.addEventListener('DOMContentLoaded', function() {
  // initialize both rating groups (use distinct keys so they don't overwrite each other)
  initRating('rating-a', 'userRatingA', 'ratingTextA');
  initRating('rating-b', 'userRatingB', 'ratingTextB');
});


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


// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-section');
  if (!menu) return;

  const header = document.querySelector('.header-sticky');
  const headerHeight = header ? header.offsetHeight : 0;

  // create placeholder to avoid page jump when menu becomes fixed
  const placeholder = document.createElement('div');
  placeholder.style.width = '100%';
  placeholder.style.height = `${menu.offsetHeight}px`;
  placeholder.style.display = 'none';
  menu.parentNode.insertBefore(placeholder, menu);

  // set CSS var for top offset so CSS can use it
  menu.style.setProperty('--menu-sticky-top', `${headerHeight}px`);

  // compute the scroll threshold once (recompute on resize)
  let threshold = menu.getBoundingClientRect().top + window.scrollY - headerHeight;

  function updateThreshold() {
    placeholder.style.height = `${menu.offsetHeight}px`;
    menu.style.setProperty('--menu-sticky-top', `${(header ? header.offsetHeight : 0)}px`);
    threshold = menu.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0);
  }

  function onScroll() {
    if (window.scrollY >= threshold) {
      if (!menu.classList.contains('sticky')) {
        menu.classList.add('sticky');
        placeholder.style.display = 'block';
      }
    } else {
      if (menu.classList.contains('sticky')) {
        menu.classList.remove('sticky');
        placeholder.style.display = 'none';
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    // small debounce
    clearTimeout(window.__menuResizeTimer);
    window.__menuResizeTimer = setTimeout(() => {
      updateThreshold();
      onScroll();
    }, 120);
  });

  // init
  updateThreshold();
  onScroll();
});
// ...existing code...

    const link = document.getElementById('samePageLink');
    const note = document.getElementById('note');

    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent scrolling to top
      note.style.display = 'block'; // Show warning
      // Optionally auto-hide after a few seconds
      setTimeout(() => {
        note.style.display = 'none';
      }, 3000);
    });
