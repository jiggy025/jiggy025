const https = require('https');

const urls = [
  'https://jiggy-portfolio.vercel.app',
  'https://jiggy-portfolio.vercel.app/resume.pdf',
  'https://race-clock-ten.vercel.app/',
  'https://codexus-calendar.netlify.app/'
];

function checkUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // 200 or 308/301 redirects are acceptable
      if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ url, status: res.statusCode });
      } else {
        reject(new Error(`${url} returned status ${res.statusCode}`));
      }
    }).on('error', (err) => reject(err));
  });
}

Promise.all(urls.map(checkUrl))
  .then(results => {
    results.forEach(r => console.log(`OK: ${r.url} (${r.status})`));
    console.log('ALL EXTERNAL URLS VALID');
  })
  .catch(err => {
    console.error('FAIL: ' + err.message);
    process.exit(1);
  });
