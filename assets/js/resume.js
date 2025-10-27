
//   KUNIN MGA DOM ID'S

        document.addEventListener('DOMContentLoaded', function() {
            const changePhotoBtn = document.getElementById('changePhotoBtn');
            const deletePhotoBtn = document.getElementById('deletePhotoBtn');
            const photoContainer = document.getElementById('photoContainer');
            const photoPlaceholder = document.getElementById('photoPlaceholder');
            const photoImg = document.getElementById('photoImg');
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            document.body.appendChild(fileInput);
            
            // Load saved photo from localStorage if available
            const savedPhoto = localStorage.getItem('resumePhoto');
            if (savedPhoto) {
                photoImg.src = savedPhoto;
                photoImg.style.display = 'block';
                photoPlaceholder.style.display = 'none';
            }
            
            // Toggle active state on click
            photoContainer.addEventListener('click', function(e) {
                if (e.target !== changePhotoBtn && e.target !== deletePhotoBtn) {
                    photoContainer.classList.toggle('active');
                }
            });
            
            changePhotoBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                fileInput.click();
            });
            
            fileInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        photoImg.src = event.target.result;
                        photoImg.style.display = 'block';
                        photoPlaceholder.style.display = 'none';
                        
                        // Save to localStorage
                        localStorage.setItem('resumePhoto', event.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            deletePhotoBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                photoImg.src = '';
                photoImg.style.display = 'none';
                photoPlaceholder.style.display = 'block';
                
                // Remove from localStorage
                localStorage.removeItem('resumePhoto');
                
                // Hide controls after deletion
                photoContainer.classList.remove('active');
            });
            
            // Hide controls when clicking outside
            document.addEventListener('click', function(e) {
                if (!photoContainer.contains(e.target)) {
                    photoContainer.classList.remove('active');
                }
            });
        });
