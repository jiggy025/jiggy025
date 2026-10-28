const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'assets', 'header-banner.svg');

if (!fs.existsSync(svgPath)) {
  console.error('FAIL: assets/header-banner.svg does not exist');
  process.exit(1);
}

const content = fs.readFileSync(svgPath, 'utf8');

// Basic XML well-formedness check
if (!content.startsWith('<svg') || !content.endsWith('</svg>')) {
  console.error('FAIL: assets/header-banner.svg is not well-formed SVG root');
  process.exit(1);
}

// Media query check
if (!content.includes('@media (prefers-color-scheme: dark)')) {
  console.error('FAIL: Missing dark mode media query');
  process.exit(1);
}

// Key copy checks
if (!content.includes('Jiggy B. Palconit')) {
  console.error('FAIL: Missing name Jiggy B. Palconit');
  process.exit(1);
}

if (!content.includes('ASSOCIATE SOFTWARE DEVELOPER')) {
  console.error('FAIL: Missing role badge');
  process.exit(1);
}

console.log('PASS: Header banner SVG verified');
