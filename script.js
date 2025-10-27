window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const heroLogo = document.getElementById('hero-logo');
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const fadeItems = document.querySelectorAll('.fade-item');

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
            menu.classList.add('visible');  // ← opacity:1 に
        } else {
            menu.classList.remove('visible'); // ← opacity:0 に戻す
        }
    });

    // ハンバーガーメニュークリックで表示切替
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');

    // フェードイン・アウトの制御
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
        }
    });

    window.addEventListener('scroll', () => {
        fadeItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.8; // 画面の8割ぐらいで発火
            if (rect.top < triggerPoint) {
                item.classList.add('visible');
            }
        });
    });
});