document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');
    
    document.addEventListener('submit', function checkEmailMatch() {
        if (email.value !== confirmEmail.value) {
            alert('Email addresses do not match. Try again.');
            event.preventDefault();
        } else {
            alert('Email addresses match. Form submitted');
    }}   
)
    email.addEventListener('change', checkEmailMatch);
    confirmEmail.addEventListener('change', checkEmailMatch);
});