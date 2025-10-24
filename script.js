window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    const logo = document.getElementById("splash-logo");
    const main = document.getElementById("main");

    // 画像を左下から右上にフェードイン＋ズーム
    setTimeout(() => {
        logo.style.opacity = 1;
        logo.style.transform = "translate(0, 0) scale(1)";
    }, 100); // 少し遅延させてCSS transitionを有効にする

    // 3秒後にスプラッシュをフェードアウト
    setTimeout(() => {
        splash.classList.add("fade-out");
        setTimeout(() => {
            splash.style.display = "none";
            main.style.display = "block";
        }, 1000);
    }, 3000);
});
