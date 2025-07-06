// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            this.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
            this.innerHTML = mobileMenu.classList.contains('active') 
                ? '<i class="ri-close-line ri-2x"></i>' 
                : '<i class="ri-menu-line ri-2x"></i>';
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
            document.body.style.overflow = '';
        });
    });

    // Progress Bar
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) progressBar.style.width = scrollProgress + '%';
    });

    // Scroll Up Button
    const scrollUp = document.querySelector('.scroll-up');
    if (scrollUp) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollUp.classList.add('visible');
            } else {
                scrollUp.classList.remove('visible');
            }
        });

        scrollUp.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Page Transitions
    const pageTransition = document.querySelector('.page-transition');
    
    // Fade out on load
    if (pageTransition) {
        setTimeout(() => {
            pageTransition.style.opacity = '0';
        }, 100);
    }
    
    // ======================
// UNIVERSAL PAGE TRANSITIONS
// ======================

document.addEventListener('DOMContentLoaded', function() {
  // Create transition element if it doesn't exist
  let pageTransition = document.querySelector('.page-transition');
  if (!pageTransition) {
    pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    pageTransition.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(pageTransition);
  }

  // Fade out on page load
  setTimeout(() => {
    pageTransition.style.opacity = '0';
    document.querySelector('.page-transition .loader').style.opacity = '0';
  }, 300);

  // Handle all internal link clicks
  document.querySelectorAll('a[href]').forEach(link => {
    if (
      link.hostname === window.location.hostname && // Same domain
      !link.href.includes('#') && // Not an anchor link
      link.target !== '_blank' && // Not opening in new tab
      !link.classList.contains('no-transition') // Not excluded
    ) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const destination = this.href;

        // Start transition
        pageTransition.style.opacity = '1';
        document.querySelector('.page-transition .loader').style.opacity = '1';

        // Navigate after animation starts
        setTimeout(() => {
          window.location.href = destination;
        }, 600);
      });
    }
  });

  // Handle beforeunload for back/forward navigation
  window.addEventListener('beforeunload', function() {
    pageTransition.style.opacity = '1';
    document.querySelector('.page-transition .loader').style.opacity = '1';
  });
});
    // Handle outgoing links
    document.querySelectorAll('a[href]').forEach(link => {
        if (link.hostname === window.location.hostname && 
            !link.classList.contains('no-transition') &&
            !link.getAttribute('href').startsWith('#') &&
            link.getAttribute('target') !== '_blank') {
            
            link.addEventListener('click', function(e) {
                if (this.href !== window.location.href) {
                    e.preventDefault();
                    if (pageTransition) {
                        pageTransition.style.opacity = '1';
                        pageTransition.style.pointerEvents = 'all';
                    }
                    
                    setTimeout(() => {
                        window.location.href = this.href;
                    }, 500);
                }
            });
        }
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, input[type="submit"], input[type="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            });
        });
    }

    // Initialize scroll animations
    initScrollAnimations();
});

// Scroll Animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkVisibility = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.75);
            if (isVisible) el.classList.add('visible');
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);
    checkVisibility(); // Initial check
}