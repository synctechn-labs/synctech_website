const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.cjs')) {
      results.push(file);
    }
  });
  return results;
}

const allFiles = [...walk(path.join(__dirname, 'src')), ...walk(path.join(__dirname, 'app'))];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // We are looking for imports.
  // from "@/pages/...
  content = content.replace(/from ["']@\/pages\//g, 'from "@/views/');
  // from "../pages/... or "../../pages/..."
  content = content.replace(/from (["'])((?:\.\.\/)+)pages\//g, 'from $1$2views/');
  // from "./pages/...
  content = content.replace(/from (["'])\.\/pages\//g, 'from $1./views/');

  // If there's any dynamic imports
  content = content.replace(/import\((["'])@\/pages\//g, 'import($1@/views/');
  content = content.replace(/import\((["'])((?:\.\.\/)+)pages\//g, 'import($1$2views/');
  content = content.replace(/import\((["'])\.\/pages\//g, 'import($1./views/');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated imports in ${file}`);
  }
});
