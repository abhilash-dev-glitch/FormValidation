document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Password constraints regex
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    // Real-time password validation
    password.addEventListener('input', function () {
        if (!passwordPattern.test(password.value)) {
            password.classList.add('is-invalid');
            password.nextElementSibling.textContent = 
                "Password must be at least 6 characters, include uppercase, lowercase, number, and special character.";
        } else {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            password.nextElementSibling.textContent = 
                "Password must be at least 6 characters.";
        }
        // Also check confirm password again
        if (confirmPassword.value.length > 0) {
            confirmPassword.dispatchEvent(new Event('input'));
        }
    });

    // Real-time confirm password match check
    confirmPassword.addEventListener('input', function () {
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add('is-invalid');
        } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPassword.classList.add('is-valid');
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        // Full Name
        const fullName = document.getElementById('fullName');
        if (fullName.value.trim() === '') {
            fullName.classList.add('is-invalid');
            valid = false;
        } else {
            fullName.classList.remove('is-invalid');
            fullName.classList.add('is-valid');
        }

        // Email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        // Password
        if (!passwordPattern.test(password.value)) {
            password.classList.add('is-invalid');
            password.nextElementSibling.textContent = 
                "Password must be at least 6 characters, include uppercase, lowercase, number, and special character.";
            valid = false;
        } else {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            password.nextElementSibling.textContent = 
                "Password must be at least 6 characters.";
        }

        // Confirm Password
        if (confirmPassword.value !== password.value || confirmPassword.value === '') {
            confirmPassword.classList.add('is-invalid');
            valid = false;
        } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPassword.classList.add('is-valid');
        }

        // Terms
        const terms = document.getElementById('terms');
        if (!terms.checked) {
            terms.classList.add('is-invalid');
            valid = false;
        } else {
            terms.classList.remove('is-invalid');
            terms.classList.add('is-valid');
        }

        if (valid) {
            window.location.href = "success.html";
        }
    });

    // Remove validation on input
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function () {
            input.classList.remove('is-invalid');
        });
    });
});