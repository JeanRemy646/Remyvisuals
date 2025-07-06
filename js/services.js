/*
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider
    const testimonials = [
        {
            name: "Emily Richardson",
            role: "Wedding Client",
            text: "Alexander captured our wedding day perfectly. His ability to find those special moments without being intrusive was remarkable. The photos tell our story exactly as we experienced it.",
            rating: 5,
            avatar: "https://source.unsplash.com/random/100x100/?portrait,woman"
        },
        // More testimonials would be added here
    ];

    let currentTestimonial = 0;
    const testimonialContainer = document.querySelector('.testimonial-slider');

    function showTestimonial(index) {
        const testimonial = testimonials[index];
        testimonialContainer.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">
                            <img src="${testimonial.avatar}" alt="${testimonial.name}">
                        </div>
                        <div class="testimonial-info">
                            <h4>${testimonial.name}</h4>
                            <p>${testimonial.role}</p>
                        </div>
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-rating">
                        ${'<i class="ri-star-fill"></i>'.repeat(testimonial.rating)}
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize testimonial slider
    showTestimonial(currentTestimonial);

    // Change testimonial every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
});
*/