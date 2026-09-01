// Gallery Images to WebP Converter Script
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = './public/galleries';
const QUALITY = 85;

console.log('🚀 Starting gallery image conversion to WebP...\n');

async function convertImages() {
  try {
    const files = fs.readdirSync(INPUT_DIR);
    
    let converted = 0;
    let skipped = 0;
    let totalOriginalSize = 0;
    let totalWebPSize = 0;

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();

      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const inputPath = path.join(INPUT_DIR, file);
        const outputPath = path.join(INPUT_DIR, file.replace(ext, '.webp'));

        if (fs.existsSync(outputPath)) {
          console.log(`⏭️  Skipped: ${file} (WebP already exists)`);
          skipped++;
          continue;
        }

        try {
          const originalStats = fs.statSync(inputPath);
          totalOriginalSize += originalStats.size;

          await sharp(inputPath)
            .webp({ quality: QUALITY })
            .toFile(outputPath);

          const webpStats = fs.statSync(outputPath);
          totalWebPSize += webpStats.size;

          const savedPercent = ((1 - (webpStats.size / originalStats.size)) * 100).toFixed(1);
          
          console.log(`✅ Converted: ${file}`);
          console.log(`   Original: ${(originalStats.size / 1024).toFixed(2)}KB`);
          console.log(`   WebP: ${(webpStats.size / 1024).toFixed(2)}KB`);
          console.log(`   Saved: ${savedPercent}% 💰\n`);
          
          converted++;
        } catch (err) {
          console.error(`❌ Error converting ${file}:`, err.message);
        }
      }
    }

    console.log('\n==================================================');
    console.log('📊 CONVERSION SUMMARY');
    console.log('==================================================');
    console.log(`✅ Converted: ${converted} files`);
    console.log(`⏭️  Skipped: ${skipped} files`);
    
    if (converted > 0) {
      const totalSavedPercent = ((1 - (totalWebPSize / totalOriginalSize)) * 100).toFixed(1);
      console.log(`\n💾 Original Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`💾 WebP Total: ${(totalWebPSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`💰 Total Saved: ${totalSavedPercent}% (${((totalOriginalSize - totalWebPSize) / 1024 / 1024).toFixed(2)}MB)`);
    }
    
    console.log('\n✨ Done!\n');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

convertImages();
