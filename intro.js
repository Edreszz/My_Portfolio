 document.addEventListener('DOMContentLoaded', function() {
            const popupBtn = document.querySelector('.popup-btn');
            const popupOverlay = document.querySelector('.popup-overlay');
            const closeBtn = document.querySelector('.close-btn');
            const countdownElement = document.getElementById('countdown');
            const progressBar = document.querySelector('.progress');
            
            let countdown;
            let timeLeft = 30;
            
            // Function to open the popup
            function openPopup() {
                popupOverlay.classList.add('active');
                timeLeft = 20;
                countdownElement.textContent = timeLeft;
                progressBar.style.width = '100%';
                
                // Start countdown
                clearInterval(countdown);
                countdown = setInterval(function() {
                    timeLeft--;
                    countdownElement.textContent = timeLeft;
                    progressBar.style.width = (timeLeft / 20) * 100 + '%';
                    
                    if (timeLeft <= 0) {
                        closePopup();
                    }
                }, 1000);
            }
            
            // Function to close the popup
            function closePopup() {
                clearInterval(countdown);
                popupOverlay.classList.remove('active');
            }
            
            // Event listeners
            popupBtn.addEventListener('click', openPopup);
            closeBtn.addEventListener('click', closePopup);
            
            // Close popup when clicking outside the content
            popupOverlay.addEventListener('click', function(e) {
                if (e.target === popupOverlay) {
                    closePopup();
                }
            });
        });