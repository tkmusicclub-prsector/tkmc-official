window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const heroLogo = document.getElementById('hero-logo');
    const menu = document.getElementById('menu');

    // スプラッシュを3秒表示してフェードアウト
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';

            // スプラッシュ消えたらヒーローロゴフェードイン
            heroLogo.style.opacity = 1;
        }, 500); // フェードアウトのトランジション時間に合わせる
    }, 3000);

    // スクロールでメニューバー表示
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menu.style.opacity = 1;
        } else {
            menu.style.opacity = 0;
        }
    });
});