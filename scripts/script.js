// const themeButton = document.querySelector('#theme-button');
// const readMoreButtons = document.querySelectorAll('.rm');
const backToTopButton = document.querySelector('#back-to-top');

// let theme = localStorage.getItem('theme');

// if (!theme) {
//   localStorage.setItem('theme', 'light');
//   theme = 'light';
// }

// themeButton.innerHTML =
//   theme === 'light'
//     ? '<i class="bi bi-moon-fill"></i>'
//     : '<i class="bi bi-brightness-high-fill"></i>';

// themeButton.addEventListener('click', () => {
//   if (theme === 'light') {
//     theme = 'dark';
//   } else {
//     theme = 'light';
//   }

//   localStorage.setItem('theme', theme);
//   setTheme(theme);
// });

// readMoreButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert(
//       "Unfortunately, I haven't set up this feature yet. 🥲 Please check it later."
//     );
//   });
// });

// function setTheme(mode) {
//   if (mode === 'dark') {
//     document.body.classList.add('dark');
//     themeButton.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
//     document.documentElement.style.setProperty('color-scheme', 'dark');
//   } else {
//     document.body.classList.remove('dark');
//     themeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
//     document.documentElement.style.setProperty('color-scheme', 'light');
//   }
// }

// setTheme(theme);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === true) {
      backToTopButton.style.display = 'none';
    }

    if (ent.isIntersecting === false) {
      backToTopButton.style.display = 'initial'; // block
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(document.querySelector('#hero__hook'));
