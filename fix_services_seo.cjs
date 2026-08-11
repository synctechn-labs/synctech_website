const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'app', '(main)', 'services');

function truncateDescription(desc) {
  let cleanDesc = desc.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  if (cleanDesc.length <= 155) return cleanDesc;
  
  // Try to truncate at a word boundary
  let truncated = cleanDesc.substring(0, 152);
  let lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 110) {
    truncated = truncated.substring(0, lastSpace);
  }
  return truncated + '...';
}

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

      const descRegex = /description:\s*(["'])([\s\S]*?)\1(,?)/g;
      
      content = content.replace(descRegex, (match, quote, descText, comma) => {
        const truncated = truncateDescription(descText);
        if (truncated.length !== descText.length) {
          changed = true;
          return `description:\n    ${quote}${truncated}${quote}${comma}`;
        }
        return match;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated descriptions in ${path.relative(servicesDir, fullPath)}`);
      }
    }
  }
}

processDirectory(servicesDir);
console.log('Finished updating SEO descriptions.');
