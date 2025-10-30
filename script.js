// Wait for the HTML content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /* ========================================
       PART 1: NEW - MOBILE NAVIGATION TOGGLE
       ======================================== */
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            // Toggle 'active' class on menu and button
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    /* ========================================
       PART 2: FILTERING LOGIC (Same as before)
       ======================================== */
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const imageCards = document.querySelectorAll('.image-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            imageCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ========================================
       PART 3: MODAL LOGIC (Same as before)
       ======================================== */

    const modalOverlay = document.getElementById('modalOverlay');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.getElementById('modalClose');

    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            const captionText = card.querySelector('.overlay-text').innerText;
            modalImage.src = imgSrc;
            modalCaption.innerText = captionText;
            modalOverlay.classList.add('active');
        });
    });

    const hideModal = () => {
        modalOverlay.classList.remove('active');
    };

    closeModal.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });

});