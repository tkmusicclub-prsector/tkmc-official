window.addEventListener('load', () => {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const fadeItems = document.querySelectorAll('.fade-item');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menu.classList.add('visible');
        } else {
            menu.classList.remove('visible');
        };
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        if (navLinks.classList.contains('open')) {
            navLinks.style.display = 'flex';
            navLinks.classList.remove('fade-out');
            setTimeout(() => {
                navLinks.classList.add('fade-in');
            }, 300);
        } else {
            navLinks.classList.remove('fade-in');
            navLinks.classList.add('fade-out');
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        };
    });

    window.addEventListener('scroll', () => {
        fadeItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.9;
            if (rect.top < triggerPoint) {
                item.classList.add('visible');
            };
        });
    });
});