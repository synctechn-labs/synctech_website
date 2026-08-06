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

  // Add "use client" if it uses any client-side interactivity or hooks
  const needsClient = /useScrollReveal|onClick=|onChange=|onSubmit=|['"]framer-motion['"]|useState|useEffect|useRef|useRouter|usePathname|useParams|useSearchParams|useContext|useMemo|useCallback/.test(content);
  if (needsClient && !content.includes('"use client"') && !content.includes("'use client'")) {
    content = '"use client";\n' + content;
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Added "use client" to ${file}`);
  }
});
