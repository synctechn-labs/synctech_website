const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace <Link ... to=... with <Link ... href=...
  const linkToRegex = /<Link([^>]*?)to=(['"]|\{)/g;
  content = content.replace(linkToRegex, '<Link$1href=$2');

  // Also replace NavLink if there are any
  const navLinkToRegex = /<NavLink([^>]*?)to=(['"]|\{)/g;
  content = content.replace(navLinkToRegex, '<NavLink$1href=$2');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Fixed links in ${file}`);
  }
});
