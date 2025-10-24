window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');

  // 3秒後にスプラッシュをフェードアウト
  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      main.style.display = 'block';
    }, 1000);
  }, 3000);
});
