
 //// JavaScript for filtering boxes with animation

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const boxes = document.querySelectorAll('.box');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            boxes.forEach(box => {
                // Remove previous animation classes
                box.classList.remove('show', 'hide');
                if (filter === 'all' || box.getAttribute('data-category') === filter) {
                    box.classList.add('show');
                    box.style.display = 'block';
                } else {
                    box.classList.add('hide');
                    // Wait for transition before hiding
                    setTimeout(() => {
                        box.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
});


                                          ////////////////////////////CODE FOR SCROLLING BACK AT THE TOP//////////////
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



//  STICKY NAVBAR OR MENU-SECTION

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('backToTop');
  if (!backToTopButton) return; // element missing -> nothing to do

  // ensure a predictable initial state
  backToTopButton.style.display = 'none';
  backToTopButton.classList.remove('visible');

  const updateVisibility = () => {
    if (window.pageYOffset > 50) {
      backToTopButton.classList.add('visible');
      backToTopButton.style.display = 'block'; // fallback if CSS class not present
    } else {
      backToTopButton.classList.remove('visible');
      backToTopButton.style.display = 'none';
    }
  };

  // update immediately (handles pages that load already scrolled)
  updateVisibility();

  // update on scroll (passive for better performance)
  window.addEventListener('scroll', updateVisibility, { passive: true });

  // smooth scroll on click
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // keyboard accessibility
  backToTopButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      backToTopButton.click();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-section');
  if (!menu) return;
  const header = document.querySelector('.header-sticky');
  const headerH = header ? header.offsetHeight : 0;

  // placeholder to avoid jump
  const placeholder = document.createElement('div');
  placeholder.style.width = '100%';
  placeholder.style.height = `${menu.offsetHeight}px`;
  placeholder.style.display = 'none';
  menu.parentNode.insertBefore(placeholder, menu);

  menu.style.setProperty('--menu-sticky-top', `${headerH}px`);

  function onResize() {
    placeholder.style.height = `${menu.offsetHeight}px`;
    menu.style.setProperty('--menu-sticky-top', `${header ? header.offsetHeight : 0}px`);
    threshold = menu.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0);
  }
  let threshold = menu.getBoundingClientRect().top + window.scrollY - headerH;

  function onScroll() {
    if (window.scrollY >= threshold) {
      if (!menu.classList.contains('sticky')) {
        menu.classList.add('sticky');
        placeholder.style.display = 'block';
      }
    } else {
      menu.classList.remove('sticky');
      placeholder.style.display = 'none';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { clearTimeout(window.__msDeb); window.__msDeb = setTimeout(onResize, 120); });

  // initial
  onResize();
  onScroll();
});