const banner = document.querySelector('#banner');
const bannerCloseButton = document.querySelector('#banner-close-button');

const isGhPage =
  window.location.hostname.includes('ubeydeozdmr.github.io') ||
  window.location.hostname.includes('127.0.0.1');
const isBannerEnabled = sessionStorage.getItem('banner') === 'true';

if (!isBannerEnabled) {
  sessionStorage.setItem('banner', 'true');
}

bannerCloseButton.addEventListener('click', () => {
  banner.classList.add('disabled');
  sessionStorage.setItem('banner', 'false');
});

if (isGhPage && isBannerEnabled) {
  banner.classList.remove('disabled');
}
