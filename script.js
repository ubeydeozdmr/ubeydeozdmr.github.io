const learnMore = document.querySelector('.hero__learn-more');
const featuredLink = document.querySelector('.featured__link');
const featuredCardGroup = document.querySelector('.featured__card-group');
const socialMediaGroup = document.querySelector('.social__media-group');
const bannerCloseButton = document.querySelector('button.banner__close');

let displayBanner = true;

if (localStorage.getItem('displayBanner') === 'false') {
  displayBanner = false;
}

if (displayBanner) {
  document.querySelector('.banner').classList.remove('hidden');
} else {
  document.querySelector('.banner').classList.add('hidden');
}

bannerCloseButton.addEventListener('click', () => {
  document.querySelector('.banner').classList.add('hidden');
  localStorage.setItem('displayBanner', 'false');
});

const PROJECTS_AT_A_GLANCE_NUM = 2;

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

(async () => {
  const data = JSON.parse(await (await fetch('data.json')).text());
  const { projects, socials } = data;

  const projectsEl = projects
    .map((project, index) => {
      const {
        title,
        descriptions,
        media: { type, src },
        badges,
        links,
      } = project;

      const descriptionsEl = descriptions
        .map((description, index) =>
          index !== 0
            ? '<br />&emsp; &emsp; ' + description
            : '&emsp; &emsp; ' + description,
        )
        .join('');

      const badgesEl = badges
        .map((badge) => {
          const { name, slug } = badge;

          return `
            <span class="featured__card-badge featured__card-badge--${slug}">
              ${name}
            </span>`;
        })
        .join('');

      const linksEl = links
        .map((link) => {
          const { name, url } = link;

          return `
            <a
              rel="noopener noreferrer"
              class="featured__card-link"
              href="${url}"
              target="_blank"
              >${name}</a
            >`;
        })
        .join('');

      const isHidden = index < PROJECTS_AT_A_GLANCE_NUM ? '' : ' hidden';
      const isHook = index === PROJECTS_AT_A_GLANCE_NUM ? ' id="hook"' : '';

      return `
        <article class="featured__card${isHidden}"${isHook}>
          <div>
            ${badgesEl}
          </div>
          <h3 class="featured__card-title">${title}</h3>
          ${
            type === 'image'
              ? `<img
                  class="featured__card-media"
                  src="${src}"
                  alt="${title}"
                />`
              : ''
          }
          ${
            type === 'video'
              ? `<video
                  class="featured__card-media"
                  src="${src}"
                  controls
                  muted
                ></video>`
              : ''
          }
          <p class="featured__card-description">
            ${descriptionsEl}
          </p>
          ${linksEl}
        </article>
`;
    })
    .join('');

  const socialsEl = socials
    .map((social) => {
      const { title, slug, url, icon } = social;

      return `
        <a
          rel="noopener noreferrer"
          title="${title}"
          class="social__media-link social__media-link--${slug}"
          href="${url}"
          target="_blank"
        >
          <ion-icon name="${icon}"></ion-icon>
          <p class="social__media-text">${title}</p>
        </a>
      `;
    })
    .join('');

  featuredCardGroup.innerHTML = projectsEl;
  socialMediaGroup.innerHTML = socialsEl;

  if (matchMedia('(min-width: 600px)').matches) {
    const socialMediaLinks = document.querySelectorAll('.social__media-link');

    socialMediaLinks.forEach((link) => {
      link.addEventListener('mouseenter', (event) => {
        event.target.classList.add('hovered');
      });

      link.addEventListener('mouseleave', (event) => {
        event.target.classList.remove('hovered');
      });
    });
  }
})();
