document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');

    function checkEmailMatch() {
        
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');
            alert('Email addresses do not match');
        } else {
            confirmEmail.setCustomValidity('');
            alert('Email addresses match.');
        }
    }

    email.addEventListener('change', checkEmailMatch);
    confirmEmail.addEventListener('change', checkEmailMatch);
});