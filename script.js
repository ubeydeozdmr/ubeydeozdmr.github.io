document.querySelector('.hero__learn-more').addEventListener('click', event => {
  event.preventDefault();

  document.querySelector('#featured').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

document.querySelector('.featured__link').addEventListener('click', event => {
  event.preventDefault();

  document.querySelectorAll('.featured__card').forEach(card => {
    card.classList.remove('hidden');
  });

  document.querySelector('#more').scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });

  document.querySelector('.featured__link').classList.add('hidden');
});
