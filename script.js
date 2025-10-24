window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const heroLogo = document.getElementById('hero-logo');
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // スプラッシュを3秒表示してフェードアウト
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';

            // スプラッシュ消えたらヒーローロゴフェードイン
            heroLogo.style.opacity = 1;
        }, 500); // フェードアウトのトランジション時間に合わせる
    }, 3000);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menu.style.opacity = 1;
        } else {
            menu.style.opacity = 0;
        }
    });

    // ハンバーガーメニュークリックで表示切替
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');

    // フェードイン・アウトの制御
        if (navLinks.classList.contains('open')) {
            navLinks.style.display = 'flex';
            setTimeout(() => {
                navLinks.classList.add('fade-in');
            }, 1000);
        } else {
            navLinks.classList.remove('fade-in');
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 1000);
        }
    });
});