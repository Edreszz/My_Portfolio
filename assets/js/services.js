// Get the note message element
var noteMsg = document.querySelector('.note-msg');

// Add an event listener to the note message element
noteMsg.addEventListener('click', (event) => {
  event.preventDefault();

  // Show the note page container
  var noteContainer = document.querySelector('.note-page-container');
  noteContainer.style.display = 'block';

  // Add an overlay to the container element
  var noteOverlay = document.querySelector('.note-container');
  var noteOverlayDiv = document.createElement('div');
  noteOverlayDiv.className = 'overlay';
  noteOverlay.appendChild(noteOverlayDiv);

  // Add event listener to the overlay
  noteOverlayDiv.addEventListener('click', () => {
    // Hide the note page container
    noteContainer.style.display = 'none';

    // Remove the overlay
    noteOverlay.removeChild(noteOverlayDiv);
  });
});
      




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



        //  /////////////////  STICK MENU SECTION ALONG WITH HEADER
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


document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu-section');
  if (!menu) return;
  const THRESHOLD = 10; // px scrolled before effect appears

  function update() {
    if (window.scrollY > THRESHOLD) menu.classList.add('scrolled');
    else menu.classList.remove('scrolled');
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
});

