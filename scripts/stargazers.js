(async function () {
  const stargazers = document.querySelector('#stargazers');

  try {
    const res = await fetch(
      'https://api.github.com/repos/ubeydeozdmr/turkiye-api'
    );
    const data = await res.json();
    stargazers.textContent = `Most starred (${data.stargazers_count} stars on GitHub)`;
  } catch (err) {
    stargazers.textContent = 'Most starred';
    console.error(err);
  }
})();
