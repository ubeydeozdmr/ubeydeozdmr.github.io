'use strict';

const link = document.querySelector('.show-more');
const cardGroup = document.querySelector('.featured-card-group');

const otherCards = `
<div class="featured-card" id="more">
  <span class="featured-card-badge badge--cs">C#</span>
  <h3 class="featured-card-title">Multipurpose Console</h3>
  <img
    class="featured-card-media"
    src="assets/multiconsole-overview.png"
    alt="Multipurpose Console"
  />
  <p class="featured-card-text">
    &emsp; &emsp; I was just starting to learn the C# language and I
    wrote these codes to reinforce and practice what I learned. In 2022,
    the repo formerly called "UbeydeWorkspaceCSharp" was renamed
    "Multipurpose Console". Some changes have been made to the code. The
    project was rebuilt using .NET Core 6.0. (Previous project was .NET
    5.0)
  </p>
  <a
    href="https://github.com/ubeydeozdmr/multipurpose-console"
    target="_blank"
    class="link project-link"
    >View source code</a
  >
</div>
<div class="featured-card">
  <div>
    <span class="featured-card-badge badge--html">HTML</span>
    <span class="featured-card-badge badge--js">JavaScript</span>
  </div>

  <h3 class="featured-card-title">Multipurpose Web</h3>
  <img
    class="featured-card-media"
    src="assets/multiweb-overview.png"
    alt="Multipurpose Web"
  />
  <p class="featured-card-text">
    &emsp; &emsp; There are many things you can do on this website. How
    about exploring?
  </p>
  <a
    href="https://github.com/ubeydeozdmr/multipurpose-web"
    target="_blank"
    class="link project-link"
    >View source code</a
  >
  <a
    href="https://ubeydeozdmr.github.io/multipurpose-web"
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
