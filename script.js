document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('response-message');
    
    if (name && email && message) {
        responseMessage.textContent = "Thank you for your message, " + name + "! I will get back to you soon.";
        responseMessage.style.color = "green";
    } else {
        responseMessage.textContent = "Please fill out all fields.";
        responseMessage.style.color = "red";
    }

    // Reset form
    document.getElementById('contact-form').reset();
});
