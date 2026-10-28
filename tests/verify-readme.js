const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', 'README.md');
const content = fs.readFileSync(readmePath, 'utf8');

// Check assets
['header-banner.svg', 'card-erp.svg', 'card-espasyo.svg', 'card-realtime.svg'].forEach(img => {
  const assetPath = path.join(__dirname, '..', 'assets', img);
  if (!fs.existsSync(assetPath)) {
    console.error(`FAIL: Asset assets/${img} missing from disk`);
    process.exit(1);
  }
  if (!content.includes(img)) {
    console.error(`FAIL: README does not reference assets/${img}`);
    process.exit(1);
  }
});

// Check key sections
const requiredSections = [
  'Engineering Focus & Architecture',
  'Production Engineering at Viajero Motorcycles Inc.',
  'Shipped Systems & Core Work',
  'Technical Arsenal'
];

requiredSections.forEach(sec => {
  if (!content.includes(sec)) {
    console.error(`FAIL: Missing section "${sec}"`);
    process.exit(1);
  }
});

// Check negative keywords
if (content.includes('engineer in progress') || content.includes('Simple-Student-Registration')) {
  console.error('FAIL: Stale junior markers found in README');
  process.exit(1);
}

console.log('README VERIFICATION PASS');
