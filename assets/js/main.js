document.addEventListener('DOMContentLoaded', function () {
  const light = document.getElementById('light');
  const isLight = localStorage.getItem('tashfeen.org:light-mode');

  if (isLight !== null) light.checked = isLight === 'true';

  light.addEventListener('change', function () {
    localStorage.setItem('tashfeen.org:light-mode', this.checked);
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key.toUpperCase() === 'L') {
    const light = document.getElementById('light');
    light.checked = !light.checked;
    localStorage.setItem('tashfeen.org:light-mode', light.checked);
  }
});
