// Enhanced contact form handling
        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form data
                    const formData = new FormData(contactForm);
                    const name = formData.get('name') || '';
                    const email = formData.get('email') || '';
                    const service = formData.get('service') || '';
                    const message = formData.get('message') || '';
                    
                    // Create WhatsApp message with proper Rwanda country code
                    const whatsappMessage = `New Photography Inquiry from Website:%0A%0A` +
                                          `*Name:* ${encodeURIComponent(name)}%0A` +
                                          `*Email:* ${encodeURIComponent(email)}%0A` +
                                          `*Service Needed:* ${encodeURIComponent(service)}%0A` +
                                          `*Message:* ${encodeURIComponent(message)}%0A%0A` +
                                          `_(Sent via Remy Visuals Website)`;
                    
                    // Submit form to FormSubmit
                    fetch(contactForm.action, {
                        method: 'POST',
                        body: new URLSearchParams(formData),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        mode: 'no-cors'
                    })
                    .then(() => {
                        // After submission, open WhatsApp with Rwanda country code
                        window.open(`https://wa.me/+250780958748?text=${whatsappMessage}`, '_blank');
                        
                        // Show success message
                        alert('Thank you! Your message has been sent to both email and WhatsApp.');
                        
                        // Reset form
                        contactForm.reset();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        // If FormSubmit fails, still open WhatsApp
                        window.open(`https://wa.me/+250780958748?text=${whatsappMessage}`, '_blank');
                        alert('Message sent to WhatsApp. You may need to send it manually.');
                    });
                });
            }
        });