const themeButton = document.querySelector('#theme-button');

let theme = localStorage.getItem('theme');

if (!theme) {
  localStorage.setItem('theme', 'light');
  theme = 'light';
}

themeButton.innerHTML =
  theme === 'light'
    ? '<i class="bi bi-moon-fill"></i>'
    : '<i class="bi bi-brightness-high-fill"></i>';

themeButton.addEventListener('click', () => {
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  localStorage.setItem('theme', theme);
  setTheme(theme);
});

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    themeButton.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    document.documentElement.style.setProperty('color-scheme', 'dark');
  } else {
    document.body.classList.remove('dark');
    themeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
    document.documentElement.style.setProperty('color-scheme', 'light');
  }
}

setTheme(theme);
