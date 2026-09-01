# 🚀 Deployment Guide - Bhoomi Techzone

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Convert images to WebP
npm run convert-images

# 3. Build for production
npm run build

# 4. Preview build locally
npm run preview

# 5. Deploy dist/ folder to server
```

---

## 📋 Pre-Deployment Checklist

### Code & Build
- [ ] All dependencies installed (`npm install`)
- [ ] No console errors in development
- [ ] Production build successful (`npm run build`)
- [ ] Build output in `dist/` folder
- [ ] All assets properly hashed

### Images
- [ ] Images converted to WebP (optional but recommended)
- [ ] All images have alt attributes
- [ ] Images have width/height attributes
- [ ] Lazy loading working correctly

### Configuration Files
- [ ] `.htaccess` in `public/` folder
- [ ] `robots.txt` in `public/` folder
- [ ] `sitemap.xml` in `public/` folder
- [ ] `favicon.png` in `public/images/` folder

### Testing
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on slow 3G network
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] All pages load without errors

---

## 🌐 Deployment Methods

### Method 1: cPanel / Shared Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Go to cPanel → File Manager
   - Navigate to `public_html/` or your domain folder
   - Upload entire `dist/` folder contents (NOT the dist folder itself!)
   - Upload structure should be:
     ```
     public_html/
     ├── index.html
     ├── .htaccess
     ├── robots.txt
     ├── sitemap.xml
     ├── assets/
     │   └── [hashed files]
     └── images/
         └── [image files]
     ```

3. **Set permissions:**
   - Files: 644
   - Folders: 755
   - `.htaccess`: 644

4. **Test:**
   - Visit your domain
   - Check all pages work
   - Verify HTTPS is working

### Method 2: FTP/SFTP

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect via FTP client (FileZilla, etc.):**
   - Host: ftp.yourdomain.com
   - Username: your_username
   - Password: your_password
   - Port: 21 (FTP) or 22 (SFTP)

3. **Upload:**
   - Navigate to `public_html/` or `www/`
   - Upload all files from `dist/` folder
   - Ensure `.htaccess` is uploaded (might be hidden)

4. **Test deployment**

### Method 3: VPS / Dedicated Server (Apache)

1. **SSH into server:**
   ```bash
   ssh user@yourserver.com
   ```

2. **Navigate to web root:**
   ```bash
   cd /var/www/html/bhoomitechzone.in
   ```

3. **Clone and build:**
   ```bash
   git clone <your-repo>
   cd bhoomi
   npm install
   npm run build
   ```

4. **Copy build files:**
   ```bash
   cp -r dist/* /var/www/html/bhoomitechzone.in/
   ```

5. **Set permissions:**
   ```bash
   chown -R www-data:www-data /var/www/html/bhoomitechzone.in
   chmod -R 755 /var/www/html/bhoomitechzone.in
   ```

6. **Ensure Apache modules are enabled:**
   ```bash
   sudo a2enmod rewrite
   sudo a2enmod headers
   sudo a2enmod deflate
   sudo a2enmod expires
   sudo systemctl restart apache2
   ```

### Method 4: Nginx Server

1. **Build and upload (same as Method 3)**

2. **Create Nginx config:**
   ```nginx
   server {
       listen 80;
       listen [::]:80;
       server_name bhoomitechzone.in www.bhoomitechzone.in;
       
       # Redirect www to non-www
       if ($host = www.bhoomitechzone.in) {
           return 301 https://bhoomitechzone.in$request_uri;
       }
       
       # Redirect HTTP to HTTPS
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       listen [::]:443 ssl http2;
       server_name bhoomitechzone.in;
       
       root /var/www/html/bhoomitechzone.in;
       index index.html;
       
       # SSL Configuration
       ssl_certificate /path/to/cert.pem;
       ssl_certificate_key /path/to/key.pem;
       
       # Security Headers
       add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-XSS-Protection "1; mode=block" always;
       add_header Referrer-Policy "strict-origin-when-cross-origin" always;
       
       # Gzip Compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
       
       # Cache Control
       location ~* \.(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot|ico)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Enable config:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/bhoomitechzone /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Method 5: CDN / Vercel / Netlify

#### Vercel:
```bash
npm install -g vercel
vercel --prod
```

#### Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🔍 Post-Deployment Verification

### Immediate Checks:
```bash
# 1. Check if site loads
curl -I https://bhoomitechzone.in

# 2. Check HTTPS redirect
curl -I http://bhoomitechzone.in

# 3. Check www redirect
curl -I https://www.bhoomitechzone.in

# 4. Check robots.txt
curl https://bhoomitechzone.in/robots.txt

# 5. Check sitemap.xml
curl https://bhoomitechzone.in/sitemap.xml
```

### Browser Tests:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images load (check WebP fallback)
- [ ] Forms work
- [ ] No console errors
- [ ] Mobile responsive
- [ ] HTTPS padlock showing

### Performance Tests:
- [ ] Run Lighthouse (all pages should score 90+)
- [ ] Check PageSpeed Insights
- [ ] Test on slow 3G connection
- [ ] Verify compression is working

### Security Tests:
- [ ] Check https://securityheaders.com/
- [ ] Verify SSL certificate valid
- [ ] Check https://www.ssllabs.com/ssltest/
- [ ] Confirm all security headers present

---

## 📊 Monitoring Setup

### Google Search Console:
1. Go to https://search.google.com/search-console
2. Add property: bhoomitechzone.in
3. Verify ownership (HTML file or DNS)
4. Submit sitemap: https://bhoomitechzone.in/sitemap.xml

### Google Analytics (Optional):
```jsx
// Add to index.html <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring:
- Set up Google Analytics Core Web Vitals reporting
- Monitor via Google Search Console
- Regular Lighthouse audits

---

## 🐛 Troubleshooting

### Issue: .htaccess not working

**Solution:**
```bash
# Ensure Apache has mod_rewrite enabled
sudo a2enmod rewrite
sudo systemctl restart apache2

# Check AllowOverride in Apache config
# Edit /etc/apache2/sites-available/000-default.conf
<Directory /var/www/html>
    AllowOverride All
</Directory>
```

### Issue: Images not loading

**Solution:**
- Check file paths are correct (case-sensitive on Linux)
- Verify images are in `public/images/` folder
- Check browser console for 404 errors
- Ensure correct MIME types in .htaccess

### Issue: Routing not working (404 on refresh)

**Solution:**
- Verify .htaccess is in root of site
- Check SPA routing rule is present
- Ensure mod_rewrite is enabled

### Issue: CSS/JS not loading

**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Check if files exist in dist/assets/
- Verify file permissions (644 for files)
- Check console for MIME type errors

### Issue: Security headers not showing

**Solution:**
```bash
# Enable Apache headers module
sudo a2enmod headers
sudo systemctl restart apache2

# Check headers
curl -I https://bhoomitechzone.in
```

---

## 🔄 Update Workflow

### For minor updates (content/text):
```bash
# 1. Make changes
# 2. Test locally
npm run dev

# 3. Build
npm run build

# 4. Upload only changed files via FTP/cPanel
```

### For major updates (functionality):
```bash
# 1. Create backup of current site
# 2. Test thoroughly in development
# 3. Build and test preview
npm run build
npm run preview

# 4. Deploy to staging first (if available)
# 5. Deploy to production
# 6. Verify everything works
```

---

## 📈 Performance Targets

### Lighthouse Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 📞 Support & Resources

### Documentation:
- README.md - Project overview
- PERFORMANCE_OPTIMIZATION_COMPLETE.md - Full optimization guide
- ACCESSIBILITY_GUIDE.md - Accessibility requirements
- SECURITY_HEADERS_GUIDE.md - Security implementation
- IMAGE_CONVERSION_GUIDE.md - Image optimization

### Useful Commands:
```bash
# Development
npm run dev              # Start dev server

# Build
npm run build           # Production build
npm run build-only      # Build without post-processing
npm run preview         # Preview production build

# Utilities
npm run lint            # Lint code
npm run convert-images  # Convert images to WebP
```

### Tools:
- Lighthouse (Chrome DevTools)
- Google Search Console
- PageSpeed Insights
- SecurityHeaders.com
- SSL Labs

---

## ✅ Deployment Complete!

Your optimized website is now live with:
- ⚡ 90+ Performance score
- ♿ Full accessibility support
- 🔒 A+ Security rating
- 🔍 SEO-optimized
- 📱 Mobile-friendly

**Next Steps:**
1. Submit sitemap to Google Search Console
2. Monitor Core Web Vitals
3. Track user analytics
4. Regular backups
5. Keep dependencies updated

---

**Need help? Check the documentation or create an issue in your repository.**
