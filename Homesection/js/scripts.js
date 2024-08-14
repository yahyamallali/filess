/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



function validateEmail() {
    var emailInput = document.getElementById('emailinput');
    var email = emailInput.value;
    var validDomains = ['@hotmail.com', '@gmail.com'];
    
    var isValid = validDomains.some(domain => email.endsWith(domain));
    
    if (!isValid) {
        alert('Please enter an email with @hotmail.com or @gmail.com');
        return false; // Prevent form submission
    }
    
    return true; // Allow form submission
}
