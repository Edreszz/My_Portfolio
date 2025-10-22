 
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
