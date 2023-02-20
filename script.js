const learnMore = document.querySelector('.hero__learn-more');
const featuredLink = document.querySelector('.featured__link');
const heroSpan = document.querySelector('.hero__text span');

const BIRTH_YEAR = 2002;

/**
 * @param {string} HTMLElementId - id of the element to scroll to
 * @returns {void}
 */
function scrollHandler(HTMLElementId) {
  document.querySelector(HTMLElementId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

learnMore.addEventListener('click', (event) => {
  event.preventDefault();
  scrollHandler('#featured');
});

featuredLink.addEventListener('click', (event) => {
  event.preventDefault();

  document.querySelectorAll('.featured__card').forEach((card) => {
    card.classList.remove('hidden');
  });

  scrollHandler('#hook');

  featuredLink.classList.add('hidden');
});

heroSpan.textContent = new Date().getFullYear() - BIRTH_YEAR;
