// Image to WebP Converter Script
// This script converts PNG, JPG, JPEG images to WebP format
// 
// Installation: npm install --save-dev sharp
// Usage: node convert-images-to-webp.js

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = './public/images';
const QUALITY = 85; // WebP quality (0-100)
const KEEP_ORIGINALS = true; // Set to false to delete original files

console.log('🚀 Starting image conversion to WebP...\n');

// Check if input directory exists
if (!fs.existsSync(INPUT_DIR)) {
  console.error(`❌ Error: Directory ${INPUT_DIR} not found!`);
  console.error('📁 Creating directory...');
  fs.mkdirSync(INPUT_DIR, { recursive: true });
}

// Main conversion function
async function convertImages() {
  try {
    const files = fs.readdirSync(INPUT_DIR);

  let converted = 0;
  let skipped = 0;
  let errors = 0;
  let totalOriginalSize = 0;
  let totalWebPSize = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    // Only process PNG, JPG, JPEG files
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const inputPath = path.join(INPUT_DIR, file);
      const outputPath = path.join(INPUT_DIR, file.replace(ext, '.webp'));

      // Skip if WebP already exists
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Skipped: ${file} (WebP already exists)`);
        skipped++;
        continue;
      }

      try {
        // Get original file size
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;
        totalOriginalSize += originalSize;

        // Convert to WebP
        const info = await sharp(inputPath)
          .webp({ quality: QUALITY, effort: 6 })
          .toFile(outputPath);

        totalWebPSize += info.size;

        const savings = ((originalSize - info.size) / originalSize * 100).toFixed(1);
        console.log(`✅ Converted: ${file}`);
        console.log(`   Original: ${(originalSize / 1024).toFixed(2)}KB`);
        console.log(`   WebP: ${(info.size / 1024).toFixed(2)}KB`);
        console.log(`   Saved: ${savings}% 💰\n`);

        converted++;

        // Delete original if specified
        if (!KEEP_ORIGINALS) {
          fs.unlinkSync(inputPath);
          console.log(`🗑️  Deleted original: ${file}\n`);
        }
      } catch (error) {
        console.error(`❌ Error converting ${file}:`, error.message);
        errors++;
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 CONVERSION SUMMARY');
  console.log('='.repeat(50));
  console.log(`✅ Converted: ${converted} files`);
  console.log(`⏭️  Skipped: ${skipped} files`);
  console.log(`❌ Errors: ${errors} files`);
  
  if (converted > 0) {
    const totalSavings = ((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n💾 Original Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`💾 WebP Total: ${(totalWebPSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`💰 Total Saved: ${totalSavings}% (${((totalOriginalSize - totalWebPSize) / 1024 / 1024).toFixed(2)}MB)`);
  }
  
  console.log('\n✨ Done!\n');
  } catch (error) {
    console.error('❌ Error during conversion:', error.message);
    process.exit(1);
  }
}

// Run the conversion
convertImages();
