document.addEventListener('DOMContentLoaded', function() {
    // Blog post filtering could be added here
    // For now, just initialize any animations
    
    // Example: Add click event to blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.card-link')) {
                const link = this.querySelector('.card-link');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
});