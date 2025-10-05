document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.centered-section');
    const projectCards = document.querySelectorAll('.project-card');
    const contactForm = document.getElementById('contactForm');
    const footer = document.querySelector('footer');

    function setDarkMode(on) {
        if (on) {
            body.classList.add('dark-mode');
            navbar.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            sections.forEach(s => s.classList.add('dark-mode'));
            projectCards.forEach(c => c.classList.add('dark-mode'));
            if (contactForm) contactForm.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            navbar.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            sections.forEach(s => s.classList.remove('dark-mode'));
            projectCards.forEach(c => c.classList.remove('dark-mode'));
            if (contactForm) contactForm.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙';
        }
    }

    // Load dark mode preference
    let darkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(darkMode);

    darkModeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        localStorage.setItem('darkMode', darkMode);
        setDarkMode(darkMode);
    });

    // Contact form submit
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting me!');
            contactForm.reset();
        });
    }
});