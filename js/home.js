// Slideshow Animation
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Initialize slideshow
    showSlide(currentSlide);
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});

// Page transition
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href.includes(window.location.hostname) && !this.href.includes('#')) {
                e.preventDefault();
                const pageTransition = document.querySelector('.page-transition');
                const href = this.href;
                
                pageTransition.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});