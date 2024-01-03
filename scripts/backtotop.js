const backToTopButton = document.querySelector('#back-to-top');

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
