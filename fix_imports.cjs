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

  // Pattern:
  // import {
  // import Link from "next/link";
  const badPattern = /import {\r?\nimport (.*?) from "(.*?)";/g;
  if (badPattern.test(content)) {
    content = content.replace(badPattern, 'import $1 from "$2";\nimport {');
  }

  const badPattern2 = /import {\nimport (.*?) from "(.*?)";/g;
  if (badPattern2.test(content)) {
    content = content.replace(badPattern2, 'import $1 from "$2";\nimport {');
  }

  // Restore Careers.jsx manually if it was destroyed
  if (file.endsWith('Careers.jsx')) {
    if (content.includes('visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },') && !content.includes('hidden: { opacity: 0, y: 20 }')) {
      // It was butchered. Let's rebuild the top part.
      const topPart = `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Users,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
`;
      const visibleIndex = content.indexOf('visible: { opacity: 1');
      if (visibleIndex !== -1) {
        content = topPart + '  ' + content.slice(visibleIndex);
      }
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file}`);
  }
});
