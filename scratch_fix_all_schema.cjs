const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
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

const files = [...walk('./app'), ...walk('./src/data/blogs'), ...walk('./src/views/blog')];
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    // If the line has a metadata key
    if (line.match(/(title|description|name|siteName|ogTitle|ogDescription|keywords|provider|author|publisher)/i)) {
       // Replace SyncTechn or synctech (if not followed by Software Solutions)
       return line.replace(/\b(SyncTechn|synctech)\b(?!\sSoftware\sSolutions)/gi, "SyncTechn Software Solutions");
    }
    return line;
  });
  
  let newContent = newLines.join('\n');
  
  if (newContent !== originalContent) {
    fs.writeFileSync(file, newContent);
    console.log('Updated', file);
    modifiedCount++;
  }
});
console.log('Total files modified:', modifiedCount);
