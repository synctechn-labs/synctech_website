const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'app', '(main)', 'services');

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name === 'page.jsx' || entry.name === 'page.js') {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Match description ending with ... before the closing quote
      const descRegex = /description:\s*(["'])([\s\S]*?)\.\.\.\1(,?)/g;

      content = content.replace(descRegex, (match, quote, descText, comma) => {
        changed = true;
        return `description:\n    ${quote}${descText}${quote}${comma}`;
      });

      // Also do the same for openGraph descriptions if they were truncated
      // Since my previous script matched all description: it probably hit openGraph.description too.

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed ellipsis in ${path.relative(servicesDir, fullPath)}`);
      }
    }
  }
}

processDirectory(servicesDir);
console.log('Finished removing ellipsis.');
