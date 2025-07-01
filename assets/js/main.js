function setLightMode(state, store = true) {
  const light = document.getElementById('light');
  light.checked = state;
  if (store) localStorage.setItem('tashfeen.org:light-mode', light.checked);
  return light.checked;
}

function isLightMode() {
  const light = document.getElementById('light');
  return light.checked;
}

function initialMode() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  else return 'light';
}

document.addEventListener('DOMContentLoaded', function () {
  setLightMode(initialMode() === 'light', (store = false));
  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', (event) => {
      setLightMode(event.matches);
      localStorage.removeItem('tashfeen.org:light-mode');
    });

  const isLight = localStorage.getItem('tashfeen.org:light-mode');
  if (isLight !== null)
    // something was stored
    setLightMode(isLight === 'true');

  const light = document.getElementById('light');
  light.addEventListener('change', function () {
    localStorage.setItem('tashfeen.org:light-mode', this.checked);
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key.toUpperCase() === 'L') {
    setLightMode(!isLightMode());
  }
});
