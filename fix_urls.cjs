const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.xml') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./');
let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Match https://synctechn.com/something but not ending in / before quote or <
  const regex = /(https:\/\/synctechn\.com(?:\/[a-zA-Z0-9_-]+)+)([\"\'<])/g;
  newContent = newContent.replace(regex, '$1/$2');
  
  // also fix canonicalUrl = `${siteUrl}/blog/${blog.id}` to end with /
  const regex2 = /(\$\{siteUrl\}\/blog\/\$\{blog\.id\})([\"\'\`])/g;
  newContent = newContent.replace(regex2, '$1/$2');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
    count++;
  }
});
console.log('Total files updated:', count);
