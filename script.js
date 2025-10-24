window.addEventListener('load', () => {
    const splash = document.getElementById('splash');

  // 3秒後にスプラッシュをフェードアウト
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
        }, 1000);
    }, 3000);
});

window.addEventListener('load', () => {
    // ヒーローロゴフェードイン
    const heroLogo = document.getElementById('hero-logo');
    setTimeout(() => {
        heroLogo.style.opacity = 1;
    }, 200); // 少し遅延してフェードイン

    // スクロールでメニューバー表示
    const menu = document.getElementById('menu');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // 50pxスクロールしたら
            menu.style.opacity = 1;
        } else {
            menu.style.opacity = 0;
        }
    });
});