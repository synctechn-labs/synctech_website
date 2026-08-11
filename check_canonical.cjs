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
      
      const canonicalMatch = content.match(/canonical:\s*["']([^"']+)["']/);
      if (canonicalMatch) {
        const canonicalUrl = canonicalMatch[1];
        const dirName = path.basename(path.dirname(fullPath));
        const expectedUrl = `https://synctechn.com/services/${dirName}/`;
        
        if (canonicalUrl !== expectedUrl) {
          console.log(`MISMATCH: ${path.relative(servicesDir, fullPath)}`);
          console.log(`  Expected: ${expectedUrl}`);
          console.log(`  Found:    ${canonicalUrl}`);
          
          // Let's fix it while we are at it
          content = content.replace(canonicalMatch[0], `canonical: "${expectedUrl}"`);
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`  -> FIXED.`);
        }
      } else {
        console.log(`NO CANONICAL: ${path.relative(servicesDir, fullPath)}`);
      }
    }
  }
}

processDirectory(servicesDir);
console.log('Finished checking canonical URLs.');
