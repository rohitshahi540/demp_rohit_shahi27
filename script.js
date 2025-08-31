
// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Page Navigation Highlight (Optional)
const navLinksAll = document.querySelectorAll('.nav-link');
navLinksAll.forEach(link => {
  link.addEventListener('click', () => {
    navLinksAll.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
    navLinks.classList.remove('active'); // Close menu on click (mobile)
  });
});

// --------------------------- 

  function openCertificate(img) {
    const popup = document.getElementById('certificate-popup');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = img.src;
    popup.style.display = 'flex';
  }

  function closeCertificate() {
    const popup = document.getElementById('certificate-popup');
    popup.style.display = 'none';
    document.getElementById('popup-image').src = '';
  }

//   ------------------------ 

   function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("thankYouPopup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }

  // -------------------------- 
   function toggleFAQ(button) {
    const item = button.parentElement;
    item.classList.toggle("active");
  }

  // ---------------------------- 

   document.addEventListener('DOMContentLoaded', function() {
            // Gallery filter functionality
            const btn1 = document.getElementById('btn1');
            const btn2 = document.getElementById('btn2');
            const btnAll = document.getElementById('btnAll');
            const galleryItems = document.querySelectorAll('.gallery-item');

            function filterGallery(group) {
                galleryItems.forEach(item => {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    item.style.transition = 'all 0.3s ease';
                    
                    setTimeout(() => {
                        if (group === 'all') {
                            item.style.display = 'block';
                        } else {
                            item.style.display = item.dataset.group === group ? 'block' : 'none';
                        }
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    }, 100);
                });

                // Update active button state
                [btn1, btn2, btnAll].forEach(btn => btn.classList.remove('active'));
                if (group === 'group1') btn1.classList.add('active');
                if (group === 'group2') btn2.classList.add('active');
                if (group === 'all') btnAll.classList.add('active');
            }

            btn1.addEventListener('click', () => filterGallery('group1'));
            btn2.addEventListener('click', () => filterGallery('group2'));
            btnAll.addEventListener('click', () => filterGallery('all'));

            // Initialize with all images shown
            filterGallery('all');

            // Modal functionality
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDesc');
            const closeModal = document.getElementById('closeModal');

            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    const imgSrc = this.querySelector('.gallery-img').src;
                    const title = this.querySelector('h3').textContent;
                    const desc = this.querySelector('p').textContent;
                    
                    modalImage.src = imgSrc;
                    modalTitle.textContent = title;
                    modalDesc.textContent = desc;
                    modal.style.display = 'flex';
                });
            });

            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            // Close modal when clicking outside the content
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });