'use strict';

const link = document.querySelector('.show-more');
const cardGroup = document.querySelector('.featured-card-group');

const otherCards = `
<div class="featured-card">
  <div>
    <span class="featured-card-badge badge--pug">Pug</span>
    <span class="featured-card-badge badge--js">JavaScript</span>
  </div>

  <h3 class="featured-card-title">Turkiye API</h3>
  <img
    class="featured-card-media"
    src="assets/turkiyeapi-hero.png"
    alt="Provinces of Turkey API"
  />
  <p class="featured-card-text">
    &emsp; &emsp; This API allows you to get data about provinces/districts in Turkey/Turkiye. 🇹🇷
  </p>
  <a
    href="https://github.com/ubeydeozdmr/turkiye-api"
    target="_blank"
    class="link project-link"
    >View source code</a
  >
  <a
    href="https://turkiyeapi.cyclic.app/"
    target="_blank"
    class="link try-to-use"
    >Try to use</a
  >
</div>
<div class="featured-card" id="more">
  <div>
    <span class="featured-card-badge badge--vue">Vue</span>
    <span class="featured-card-badge badge--html">HTML</span>
    <span class="featured-card-badge badge--js">JavaScript</span>
    <span class="featured-card-badge badge--css">CSS</span>
  </div>
  <h3 class="featured-card-title">Crema To-Do</h3>
  <img
    class="featured-card-media"
    src="assets/crematodo-v1.0-preview.png"
    alt="Crema To-Do"
  />
  <p class="featured-card-text">
    &emsp; &emsp; A simple to-do app built using Vue.js and tailwindcss.
  </p>
  <a
    href="https://github.com/ubeydeozdmr/crema-todo"
    target="_blank"
    class="link project-link"
    >View source code</a
  >
  <a
    href="https://crematodo.netlify.app"
    target="_blank"
    class="link try-to-use"
    >Try to use</a
  >
</div>
`;

function moreCards() {
  cardGroup.insertAdjacentHTML('beforeend', otherCards);
  link.style.display = 'none';
}
