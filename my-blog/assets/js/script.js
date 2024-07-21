document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.nav-toggler');
    const navLinks = document.querySelector('.nav-links');

    navToggler.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
