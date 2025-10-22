

const contactId = document.getElementById("contact-id");
contactId.style.color = "#f3f1f1";

const messageElement = document.createElement('p');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Submit the form data to Formspree's API
  fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response) => {
    if (response.ok) {
      // Display the success message
      messageElement.textContent = 'Thank you for hiring me!';
      messageElement.style.color = '#fff';
      messageElement.style.fontSize = '24px';
      messageElement.style.fontWeight = 'bold';
      messageElement.style.marginTop = '20px';

      form.appendChild(messageElement);

      // Hide the message after 3 seconds
      setTimeout(() => {
        messageElement.remove();
      }, 3000);
    } else {
      console.error('Error submitting form:', response.status);
    }
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
  });
});


 //////////////////clear fields//////////
//          var nameUser = document.getElementById("nameUser");
//          var emailUser = document.getElementById("emailUser");
//          var contactUser = document.getElementById("contactUser");
//          var messageUser = document.getElementById("messageUser");

//  document.querySelector(`#myForm`).addEventListener(`submit`, function(e){
//     e.preventDefault();

//     nameUser.value = "";
//     emailUser.value = "";
//     contactUser.value = "";
//     messageUser.value = "";
//  })
var nameUser = document.getElementById("nameUser");
var emailUser = document.getElementById("emailUser");
var contactUser = document.getElementById("contactUser");
var messageUser = document.getElementById("messageUser");

document.querySelector(`#myForm`).addEventListener(`submit`, function(e){
  e.preventDefault();

  // Submit the form data to Formspree
  fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
    method: 'POST',
    body: new FormData(e.target),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response) => {
    if (response.ok) {
      // Display the success message
      messageElement.textContent = 'Thank you for hiring me!';
      messageElement.style.color = '#fff';
      messageElement.style.fontSize = '24px';
      messageElement.style.fontWeight = 'bold';
      messageElement.style.marginTop = '20px';

      form.appendChild(messageElement);

      // Hide the message after 3 seconds and clear the input fields
      setTimeout(() => {
        messageElement.remove();
        nameUser.value = "";
        emailUser.value = "";
        contactUser.value = "";
        messageUser.value = "";
      }, 3000);
    } else {
      console.error('Error submitting form:', response.status);
    }
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
  });
})

 function openConfirmDialog() {
    document.getElementById("confirm-dialog").style.display = "block";
  }

          /////Confirmation to return  or confirm when leave to pages
  function closeConfirmDialog() {
    document.getElementById("confirm-dialog").style.display = "none";
    // If the user clicks "Confirm", redirect to the home page
    if (e.target.id === "confirm-yes") {
      window.location.href = "../home/home.html";
    }
  }


  
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
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
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
    
    // Close menu when clicking on links
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
});



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
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
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
    
    // Close menu when clicking on links
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
});





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
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
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
    
    // Close menu when clicking on links
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
});



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