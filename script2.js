document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you for reaching out! Your message has been sent.');
    this.reset(); // Reset form after submission
});
