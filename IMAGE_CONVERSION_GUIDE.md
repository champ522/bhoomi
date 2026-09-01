# Image Optimization Guide

## Step 1: Convert Images to WebP

### Method 1: Using Online Tools (Quick)
- Go to https://squoosh.app/
- Drag and drop your images
- Select WebP format
- Adjust quality (80-85% recommended)
- Download optimized images

### Method 2: Using Node.js Script (Batch Conversion)

Install sharp package:
```bash
npm install --save-dev sharp
```

Create `convert-to-webp.js` in project root:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images';

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(ext, '.webp'));

      sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath)
        .then(info => {
          console.log(`✅ Converted: ${file} -> ${path.basename(outputPath)}`);
          console.log(`   Size: ${(info.size / 1024).toFixed(2)}KB`);
        })
        .catch(err => {
          console.error(`❌ Error converting ${file}:`, err);
        });
    }
  });
});
```

Run the script:
```bash
node convert-to-webp.js
```

### Method 3: Using Command Line Tools

#### Using cwebp (Google's WebP Encoder)
```bash
# Install cwebp
npm install -g cwebp-bin

# Convert single image
cwebp -q 85 input.jpg -o output.webp

# Batch convert (Windows PowerShell)
Get-ChildItem .\public\images\*.png | ForEach-Object { cwebp -q 85 $_.FullName -o ($_.DirectoryName + "\" + $_.BaseName + ".webp") }
Get-ChildItem .\public\images\*.jpg | ForEach-Object { cwebp -q 85 $_.FullName -o ($_.DirectoryName + "\" + $_.BaseName + ".webp") }
```

## Step 2: Optimize Existing Images

### Recommended Image Sizes:
- **Hero Images**: Max 1920x1080px, Quality 80%
- **Client Logos**: Max 300x300px, Quality 85%
- **Icons**: Max 100x100px (consider SVG instead)
- **Thumbnails**: Max 400x400px, Quality 80%
- **Content Images**: Max 1200x800px, Quality 80%

### Compression Guidelines:
- **WebP**: 80-85% quality
- **PNG**: Use for logos/icons with transparency
- **JPG**: 75-85% quality for photos
- **SVG**: For icons and simple graphics (already optimized)

## Step 3: Usage in Components

### Using OptimizedImage Component:
```jsx
import OptimizedImage from './components/OptimizedImage';

// Basic usage
<OptimizedImage 
  src="/images/example.jpg"
  alt="Description"
  width="600"
  height="400"
/>

// Priority image (above the fold)
<OptimizedImage 
  src="/images/hero.jpg"
  alt="Hero"
  width="1920"
  height="1080"
  priority={true}
  loading="eager"
/>

// With responsive sizes
<OptimizedImage 
  src="/images/product.jpg"
  alt="Product"
  width="800"
  height="600"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Step 4: Performance Checklist

✅ Convert all PNG/JPG to WebP (keep originals as fallback)
✅ Add width and height to all images
✅ Use loading="lazy" for below-the-fold images
✅ Use loading="eager" or priority={true} for above-the-fold images
✅ Compress images to appropriate quality (80-85%)
✅ Use appropriate image sizes (don't serve 4K images for thumbnails)
✅ Leverage responsive images with srcset
✅ Optimize SVGs using SVGO

## Estimated Performance Gains:
- WebP: 25-35% smaller than PNG
- WebP: 25-35% smaller than JPEG
- Lazy loading: 20-30% faster initial page load
- Proper sizing: 40-60% bandwidth savings

## Tools:
- Squoosh: https://squoosh.app/
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/
- Sharp (Node.js): https://sharp.pixelplumbing.com/
