document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can implement sending the form data to the server here
    alert('Your message has been sent!');
    // You can reset the form fields if needed
    event.target.reset();
});
