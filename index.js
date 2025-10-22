 
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
// Coming Soon Popup Logic
        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('coming-soon-popup');
            const closeBtn = document.getElementById('close-popup');
            const understandBtn = document.getElementById('understand-btn');
            const countdownElement = document.getElementById('countdown');
            
            // Check if the popup has been shown before in this session
            if (!sessionStorage.getItem('popupShown')) {
                // Show the popup
                popup.classList.remove('hidden');
                
                // Set flag in sessionStorage
                sessionStorage.setItem('popupShown', 'true');
                
                // Start countdown timer
                let timeLeft = 60; // 1 minute in seconds
                const countdownInterval = setInterval(function() {
                    timeLeft--;
                    const minutes = Math.floor(timeLeft / 60);
                    const seconds = timeLeft % 60;
                    countdownElement.textContent = `This message will automatically close in ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                    
                    if (timeLeft <= 0) {
                        clearInterval(countdownInterval);
                        closePopup();
                    }
                }, 1000);
            } else {
                // Popup was already shown in this session, hide it
                popup.classList.add('hidden');
            }
            
            // Close popup when close button is clicked
            closeBtn.addEventListener('click', closePopup);
            
            // Close popup when understand button is clicked
            understandBtn.addEventListener('click', closePopup);
            
            function closePopup() {
                popup.classList.add('hidden');
            }
        });


