
                    ///Communication script///

// Add event listener to the "Open Page" link
const openPageLink = document.querySelector('.open-page');
openPageLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Show the page container
  const pageContainer = document.querySelector('.page-container');
  pageContainer.style.display = 'block';

  // Add an overlay to the container element
  const container = document.querySelector('.container'); // Replace with your container element
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  container.appendChild(overlay);

  // Add event listener to the overlay
  overlay.addEventListener('click', () => {
    // Hide the page container
    pageContainer.style.display = 'none';

    // Remove the overlay
    container.removeChild(overlay);
  });
});


                 ///Adaptive Learner script///

                 
// Add event listener to the "Open Page" link
var openadaptivePage = document.querySelector(`#adaptive-page`);
openadaptivePage.addEventListener(`click`, (event) =>{
  event.preventDefault();

// Show the page container
  var adaptiveContainer = document.querySelector(`#adaptive-container`);
  adaptiveContainer.style.display = `block`;
// Add an overlay to the container element
  var adaptiveOverlay = document.querySelector(`#main-adaptive-container`);
  var adaptiveOverlayDiv = document.createElement(`div`);
  adaptiveOverlayDiv.className = `overlay`;
  adaptiveOverlay.appendChild(adaptiveOverlayDiv);

// Add event listener to the overlay
adaptiveOverlayDiv.addEventListener(`click`, () =>{
  // Hide the page container
  adaptiveContainer.style.display = `none`;

  // Remove the overlay
  adaptiveOverlay.removeChild(adaptiveOverlayDiv);
});

});




                 ///Resilient Under PPressure script///

                 // Add event listener to the "Open Page" link
var openpressurePage = document.querySelector(`#pressure-page`);
openpressurePage.addEventListener(`click`, (event) =>{
  event.preventDefault();

// Show the page container
  var pressureContainer = document.querySelector(`#pressure-container`);
  pressureContainer.style.display = `block`;
// Add an overlay to the container element
  var pressureOverlay = document.querySelector(`#main-pressure-container`);
  var pressureOverlayDiv = document.createElement(`div`);
  pressureOverlayDiv.className = `overlay`;
  pressureOverlay.appendChild(pressureOverlayDiv);

// Add event listener to the overlay
pressureOverlayDiv.addEventListener(`click`, () =>{
  // Hide the page container
  pressureContainer.style.display = `none`;

  // Remove the overlay
  pressureOverlay.removeChild(pressureOverlayDiv);
});

});


      

// Add event listener to the "Open Page" link

const colabOpenPage = document.getElementById(`colab-page`);
colabOpenPage.addEventListener(`click`, (event)=>{
  event.preventDefault();
// Show the page container
var colabContainer = document.querySelector(`#colab-container`);
colabContainer.style.display = "block";
// Add an overlay to the container element
var colabOverlay = document.getElementById(`main-colaborative-container`);
var colabOverlayDiv = document.createElement(`div`);
colabOverlayDiv.className = `overlay`;
colabOverlay.appendChild(colabOverlayDiv);
// Add event listener to the overlay div

colabOverlayDiv.addEventListener(`click`, ()=>{
  // Hide the page container
  colabContainer.style.display = "none";
      // Remove the overlay
      colabOverlay.removeChild(colabOverlayDiv);
});
    });



const btn = document.querySelector('.btn')
        btn.addEventListener('click',()=>{
            btn.classList.add('active')
            setTimeout(() => {
                btn.classList.remove('active')
            }, 13000);
        })


// Dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'block';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                // Small delay before hiding to prevent flickering
                setTimeout(() => {
                    menu.style.display = 'none';
                }, 300);
            }
        });
    });
});

        //For mobile view of Menu with Humberger

        







        // ===== DROPDOWN MENU FIX =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dropdown script loaded');
    
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        // Add hover events
        dropdown.addEventListener('mouseenter', function() {
            console.log('Mouse entered dropdown');
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'block';
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            console.log('Mouse left dropdown');
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'none';
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            }
        });
    });
    
    // Also make sure dropdowns close when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            });
        }
    });
});


// Test if dropdown elements exist
setTimeout(function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    console.log('Found dropdowns:', dropdowns.length);
    
    dropdowns.forEach((dropdown, index) => {
        const menu = dropdown.querySelector('.dropdown-menu');
        console.log('Dropdown', index, 'has menu:', !!menu);
    });
}, 1000);


// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu-container');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu with close button
    mobileMenuClose.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Close all dropdowns when menu closes
        document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
    
    // Dropdown functionality
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-menu-container') && !e.target.closest('.mobile-menu-btn')) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on links (except dropdown toggles)
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!this.classList.contains('mobile-dropdown-toggle')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close dropdowns when clicking on a non-toggle link
    const nonToggleLinks = document.querySelectorAll('.mobile-menu a:not(.mobile-dropdown-toggle)');
    nonToggleLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });
    });
});





const showtopHeaderWhenScroll = document.getElementById("menu-section");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        showtopHeaderWhenScroll.classList.add("show");
    } else {
        showtopHeaderWhenScroll.classList.remove("show");
    }
});



document.addEventListener('DOMContentLoaded', function() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => observer.observe(el));
});




const menuSection = document.querySelector('.menu-section');
const header = document.getElementById('navbar'); // If you use a fixed header

window.addEventListener('scroll', () => {
    // Get the scroll position and header height
    const scrollY = window.scrollY;
    const headerHeight = header ? header.offsetHeight : 0;

    if (scrollY > headerHeight) {
        menuSection.classList.add('sticky');
    } else {
        menuSection.classList.remove('sticky');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const fadeEls = document.querySelectorAll('.fade-section');
    let lastScrollY = window.scrollY;

    // Add a delay for each element
    fadeEls.forEach((el, i) => {
        el.style.transitionDelay = (i * 0.15) + 's';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Fade up when scrolling down
            if (entry.isIntersecting && window.scrollY > lastScrollY) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('out');
            }
            // Fade down when scrolling up
            if (!entry.isIntersecting && window.scrollY < lastScrollY) {
                entry.target.classList.remove('visible');
                entry.target.classList.add('out');
            }
        });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => observer.observe(el));

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
    });
});



              // ANIMATIONS SCROLLING BACK AT THE TOP

   // Fixed sticky header functionality
        const navbar = document.getElementById("navbar");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            // Sticky header logic
            if (window.scrollY > 0) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
            
            // Scroll direction detection for animations
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
            lastScrollY = currentScrollY;
            
            // Apply scroll direction to body for CSS targeting
            document.body.setAttribute('data-scroll-direction', scrollDirection);
        });

        // Intersection Observer for fade animations
        const fadeSections = document.querySelectorAll('.fade-section');
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const scrollDirection = document.body.getAttribute('data-scroll-direction');
                    
                    if (scrollDirection === 'down') {
                        entry.target.classList.add('fade-up');
                        entry.target.classList.remove('fade-down');
                    } else {
                        entry.target.classList.add('fade-down');
                        entry.target.classList.remove('fade-up');
                    }
                } else {
                    // Remove animation classes when element is out of view
                    // This allows the animation to trigger again when scrolling back
                    entry.target.classList.remove('fade-up', 'fade-down');
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Adjust trigger point slightly
        });

        // Observe all fade sections
        fadeSections.forEach(section => {
            fadeObserver.observe(section);
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

                      

// STICKY NAVBAR 

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


// THE SCROLL IS DISABLE WEHEN CLICKED THE OPEN PAGE LINK// ...new file...
(function () {
  // simple scroll lock that preserves scroll position
  let scrollY = 0;

  function lockScroll() {
    scrollY = window.scrollY || window.pageYOffset;
    document.documentElement.style.setProperty('--scroll-lock-top', `-${scrollY}px`);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  }

  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    window.scrollTo(0, scrollY);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.page-container');
    if (!modal) return;

    const content = modal.querySelector('.page-content');
    const overlay = modal.querySelector('.overlay') || modal;

    // open when modal element itself is clicked (per your request)
    modal.addEventListener('click', function (ev) {
      // if already open, ignore clicks that are inside content (so click opens only when clicking container background)
      if (modal.classList.contains('open')) return;
      // open only when clicking the container (not child content)
      if (content && content.contains(ev.target)) return;
      modal.classList.add('open');
      lockScroll();
    });

    // close when clicking overlay (outside content) or an element with .page-close
    function closeModal() {
      if (!modal.classList.contains('open')) return;
      modal.classList.remove('open');
      unlockScroll();
    }

    if (overlay) {
      overlay.addEventListener('click', function (ev) {
        // if clicked inside content, ignore
        if (content && content.contains(ev.target)) return;
        closeModal();
      });
    }

    // support any close buttons inside
    modal.addEventListener('click', function (ev) {
      if (ev.target.closest('.page-close')) closeModal();
    });

    // allow Esc to close
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') closeModal();
    });
  });
})();










