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
  let changed = false;

  // Replace react-router-dom imports
  if (content.includes('react-router-dom')) {
    const importRegex = /import\s+{(.*?)}\s+from\s+['"]react-router-dom['"];?/g;
    let match;
    let nextNavigationImports = [];
    let hasLink = false;

    while ((match = importRegex.exec(content)) !== null) {
      const imports = match[1].split(',').map(s => s.trim());
      
      if (imports.includes('Link')) hasLink = true;
      if (imports.includes('useNavigate')) nextNavigationImports.push('useRouter');
      if (imports.includes('useLocation')) nextNavigationImports.push('usePathname');
      if (imports.includes('useParams')) nextNavigationImports.push('useParams');
    }

    content = content.replace(importRegex, '');

    let newImports = '';
    if (hasLink) {
      newImports += 'import Link from "next/link";\n';
    }
    if (nextNavigationImports.length > 0) {
      newImports += `import { ${nextNavigationImports.join(', ')} } from "next/navigation";\n`;
    }

    // Add new imports after the last import or at the top
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLastImport = content.indexOf('\n', lastImportIndex) + 1;
      content = content.slice(0, endOfLastImport) + newImports + content.slice(endOfLastImport);
    } else {
      content = newImports + content;
    }

    changed = true;
  }

  // Replace <Link to="..."> with <Link href="...">
  if (content.includes('<Link ')) {
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    changed = true;
  }

  // Replace useNavigate()
  if (content.includes('useNavigate()')) {
    content = content.replace(/const (\w+) = useNavigate\(\);/g, 'const $1 = useRouter();');
    changed = true;
  }

  // Replace navigate(...) with router.push(...)
  // We need to find the variable name assigned to useNavigate()
  const routerMatch = content.match(/const (\w+) = useRouter\(\);/);
  if (routerMatch) {
    const varName = routerMatch[1];
    // This is tricky if it was named navigate, we replace navigate( with router.push(
    if (varName === 'navigate') {
      content = content.replace(/navigate\(/g, 'navigate.push(');
      changed = true;
    }
  }

  // Replace useLocation()
  if (content.includes('useLocation()')) {
    content = content.replace(/const (\w+) = useLocation\(\);/g, 'const $1 = { pathname: usePathname() };');
    changed = true;
  }

  // Add "use client" if needed
  const needsClient = /useState|useEffect|useRef|useRouter|usePathname|useParams|gsap|lenis|swiper/i.test(content);
  if (needsClient && !content.includes('"use client"')) {
    content = '"use client";\n' + content;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Refactored ${file}`);
  }
});
