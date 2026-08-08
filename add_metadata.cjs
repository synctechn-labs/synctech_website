const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'data', 'blogs');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file === 'index.js' || !file.endsWith('.js')) return;

  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has metaTitle
  if (content.includes('metaTitle:')) return;

  // Extract title and description using regex
  const titleMatch = content.match(/title:\s*["']([^"']+)["'],/);
  // description can span multiple lines if they used backticks or concatenation, but usually it's just a string in quotes.
  // We'll use a more robust regex for description if it's on the same line or next lines.
  const descMatch = content.match(/description:\s*["']([^"']+)["'],/s);

  if (titleMatch && descMatch) {
    const originalTitle = titleMatch[1];
    const originalDesc = descMatch[1];
    
    // Create SEO versions
    const metaTitle = originalTitle.length > 50 
        ? originalTitle 
        : `${originalTitle} | Expert Insights`;
        
    // truncate to ~155 chars for SEO description
    let metaDesc = originalDesc.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    if (metaDesc.length > 155) {
        metaDesc = metaDesc.substring(0, 152) + '...';
    }

    // Insert metaTitle and metaDescription after description
    const replacement = `description:\n    "${originalDesc}",\n  metaTitle: "${metaTitle}",\n  metaDescription:\n    "${metaDesc}",`;
    
    // Replace the old description line(s) with the new block
    // We replace the exact match of the description
    const descFullMatch = content.match(/(description:\s*["'][^"']+["'],)/s);
    if(descFullMatch) {
        content = content.replace(descFullMatch[1], replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
  } else {
    console.log(`Could not parse ${file}`);
  }
});
