#!/usr/bin/env node

/**
 * Build Verification Script
 * Verifies that the build only contains the selected design
 * and reports bundle size information
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DESIGN_ID = process.env.DESIGN_ID || 'design-a';

function verifyBuild() {
  const distDir = path.join(__dirname, '../dist');
  
  console.log(`\n🔍 Verifying build for ${DESIGN_ID}...\n`);
  
  // Check if dist directory exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found! Build may have failed.');
    process.exit(1);
  }

  // Read built HTML
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found in dist!');
    process.exit(1);
  }

  const html = fs.readFileSync(indexPath, 'utf8');
  
  // Check if unselected design is present
  const otherDesign = DESIGN_ID === 'design-a' ? 'design-b' : 'design-a';
  
  if (html.includes(otherDesign)) {
    console.error(`❌ Found ${otherDesign} in ${DESIGN_ID} build!`);
    console.error('   Tree-shaking may not be working correctly.');
    process.exit(1);
  }
  
  // Check bundle size
  const assetsDir = path.join(distDir, '_astro');
  let totalSize = 0;
  let fileCount = 0;

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    fileCount = files.length;
    
    totalSize = files.reduce((sum, file) => {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      return sum + stats.size;
    }, 0);
  }
  
  console.log(`✅ Build verified for ${DESIGN_ID}`);
  console.log(`📊 Bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log(`📁 Asset files: ${fileCount}`);
  console.log(`✨ No traces of ${otherDesign} found\n`);
}

verifyBuild();
