const fs = require('fs');
const path = require('path');

const cards = [
  { file: 'card-erp.svg', keyword: '@Version Concurrency', title: 'Enterprise ERP & JRF Bridge' },
  { file: 'card-espasyo.svg', keyword: '53 Passing Tests', title: 'Offline-First Retail Ledger' },
  { file: 'card-realtime.svg', keyword: '5ms Bus Latency', title: 'Real-Time Event Systems' }
];

cards.forEach(c => {
  const p = path.join(__dirname, '..', 'assets', c.file);
  if (!fs.existsSync(p)) {
    console.error(`FAIL: assets/${c.file} does not exist`);
    process.exit(1);
  }
  const s = fs.readFileSync(p, 'utf8');
  if (!s.startsWith('<svg') || !s.endsWith('</svg>')) {
    console.error(`FAIL: assets/${c.file} is not valid SVG root`);
    process.exit(1);
  }
  if (!s.includes('@media (prefers-color-scheme: dark)')) {
    console.error(`FAIL: assets/${c.file} missing dark mode query`);
    process.exit(1);
  }
  if (!s.includes(c.keyword)) {
    console.error(`FAIL: assets/${c.file} missing keyword "${c.keyword}"`);
    process.exit(1);
  }
});

console.log('ALL CARDS PASS');
