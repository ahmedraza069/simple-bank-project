// add click event handler with the submit button
document.getElementById('login-btn').addEventListener('click', function(){
    // Get Email
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;
    // Get password
    const passwordField = document.getElementById('password-field');
    const passwordFieldValue = passwordField.value;
    if (emailFieldValue === 'rakibulhasanraza@gmail.com' && passwordFieldValue === '123456') {
        window.location.href = "bank.html";
    }
     else {
        alert('Your Email & Password Incorrect..!!')
    }
})

