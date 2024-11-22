document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = event.target[0].value;
        const email = event.target[1].value;
        const message = event.target[2].value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        console.log('Form submitted:', { name, email, message });

        alert('Thank you for your message, ' + name + '! We will get back to you soon.');

        event.target.reset();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const name = event.target[0].value;
        const email = event.target[1].value;
        const message = event.target[2].value;
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        console.log('Form submitted:', { name, email, message });

        alert('Thank you for your message, ' + name + '! We will get back to you soon.');

        
        event.target.reset();
    });
});