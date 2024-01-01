// iife
(() => {
  if (
    !window.location.hostname.includes('ubeydeozdmr.github.io') &&
    !window.location.hostname.includes('ubeydeozdmr.netlify.app')
    // && !window.location.hostname.includes('127.0.0.1') // for testing
  )
    return;
  console.warn('You are using ubeydeozdmr.github.io or ubeydeozdmr.netlify.app');
  // const banner = document.querySelector('#banner');
  // const bannerCloseButton = document.querySelector('#banner-close-button');
  // let session = sessionStorage.getItem('banner');
  // // if (window.location.host === 'ubeydeozdmr.github.io' || window.location.host === 'ubeydeozdmr.netlify.app') {
  // // if (window.location.host.includes('ubeydeozdmr.github.io') || window.location.host.includes('ubeydeozdmr.netlify.app')) {
  // // if (window.location.hostname.includes('ubeydeozdmr.github.io') || window.location.hostname.includes('ubeydeozdmr.netlify.app')) {
  // // if (window.location.hostname.includes('127.0.0.1')) {
  // //   banner.classList.remove('disabled');
  // // }
  // if (!session) {
  //   sessionStorage.setItem('banner', 'true');
  //   session = 'true';
  // }
  // bannerCloseButton.addEventListener('click', () => {
  //   banner.classList.add('disabled');
  //   sessionStorage.setItem('banner', 'false');
  //   session = 'false';
  // });
  // if (window.location.hostname.includes('127.0.0.1') && session === 'true') {
  //   banner.classList.remove('disabled');
  // }
})();
