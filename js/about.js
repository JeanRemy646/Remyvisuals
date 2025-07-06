document.addEventListener('DOMContentLoaded', function() {
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    let counted = false;
    
    function startCounting() {
        if (counted) return;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                const value = Math.min(Math.floor(current), target);
                counter.innerText = value.toLocaleString();
                
                if (value < target) {
                    requestAnimationFrame(updateCounter);
                }
            };
            
            updateCounter();
        });
        
        counted = true;
    }
    
    // Check if counters are in view
    function checkCounters() {
        if (counters.length > 0) {
            const counterSection = counters[0].closest('section');
            if (counterSection) {
                const rect = counterSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    startCounting();
                }
            }
        }
    }
    
    // Initial check
    checkCounters();
    
    // Check on scroll
    window.addEventListener('scroll', checkCounters);
});