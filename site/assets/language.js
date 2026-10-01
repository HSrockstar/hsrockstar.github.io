// 两种语言共用章节 ID，切换后保留访客正在阅读的章节。
(() => {
  const language = document.getElementById('language');
  if (!language) return;
  language.addEventListener('change', () => {
    const destination = new URL(language.value, window.location.origin);
    destination.hash = window.location.hash;
    window.location.assign(destination.href);
  });
})();
