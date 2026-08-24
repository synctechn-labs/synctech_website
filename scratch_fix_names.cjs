const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Replace siteName: "SyncTechn" or siteName: 'SyncTechn'
  content = content.replace(/siteName:\s*['"]SyncTechn['"]/g, 'siteName: "SyncTechn Software Solutions"');
  
  // Replace "name": "SyncTechn"
  content = content.replace(/"name":\s*"SyncTechn"/g, '"name": "SyncTechn Software Solutions"');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    modifiedCount++;
  }
});
console.log('Total files modified:', modifiedCount);
