

// Simple animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const errorCode = document.querySelector('.error-code');
    
    // Add a subtle hover effect to the error code
    errorCode.addEventListener('mouseover', function() {
        this.style.animation = 'none';
    });
    
    errorCode.addEventListener('mouseout', function() {
        this.style.animation = 'pulse 2s infinite';
    });
});










                                                // 404 ERROR HERE


   // Enhanced animation effect
        document.addEventListener('DOMContentLoaded', function() {
            const errorCode = document.querySelector('.error-code');
            
            // Add hover effect to error code
            errorCode.addEventListener('mouseover', function() {
                this.style.animation = 'none';
                const fours = document.querySelectorAll('.four');
                fours.forEach(four => {
                    four.style.textShadow = '0 0 30px rgba(66, 153, 225, 0.8)';
                });
            });
            
            errorCode.addEventListener('mouseout', function() {
                this.style.animation = 'pulse 2s infinite';
                const fours = document.querySelectorAll('.four');
                fours.forEach(four => {
                    four.style.textShadow = '0 0 20px rgba(66, 153, 225, 0.6)';
                });
            });
            
            // Create particle background
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 15;
                const duration = Math.random() * 10 + 15;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}vw`;
                particle.style.top = `${posY}vh`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
            
            // Add interactive effects to robot
            const robot = document.querySelector('.broken-robot');
            robot.addEventListener('mouseover', function() {
                const sparks = document.querySelectorAll('.spark');
                sparks.forEach(spark => {
                    spark.style.animationDuration = '0.5s';
                });
                
                const crack = document.querySelector('.crack');
                crack.style.animationDuration = '0.7s';
            });
            
            robot.addEventListener('mouseout', function() {
                const sparks = document.querySelectorAll('.spark');
                sparks.forEach(spark => {
                    spark.style.animationDuration = '1.5s';
                });
                
                const crack = document.querySelector('.crack');
                crack.style.animationDuration = '2s';
            });
        });


        document.getElementById('mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
});

 // Create particles for background
        document.addEventListener('DOMContentLoaded', function() {
            const particlesContainer = document.getElementById('particles');
            const numberOfParticles = 50;
            
            for (let i = 0; i < numberOfParticles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties for each particle
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * 100;
                const duration = Math.random() * 10 + 5;
                const delay = Math.random() * 5;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
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
