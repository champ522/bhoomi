# 🚀 Nginx Deployment Guide - Bhoomi Techzone

## ⚠️ Important: Nginx vs Apache

**Your server uses: NGINX** ✅  
- **.htaccess** files **DO NOT WORK** on Nginx (Apache only)
- Use **nginx.conf** configuration instead

---

## 📁 File Structure After Fix

```
bhoomi/
├── nginx.conf                    ✅ USE THIS (Nginx server)
├── nginx-cache-fix.conf          ✅ Additional cache config
├── public/
│   └── .htaccess                 ❌ DELETE (Apache only, not needed)
└── dist/                         📂 Build output (deploy this)
```

---

## 🔧 Deployment Steps for Nginx Server

### Step 1: Build Your Project

```bash
# Install dependencies
npm install --legacy-peer-deps

# (Optional) Convert images to WebP
npm run convert-images

# Build for production
npm run build
```

### Step 2: Upload `dist/` Folder

Upload the entire **`dist/`** folder contents to your server:

**Server Path Example:**
```
/www/wwwroot/BhoomiTechzoneWebsite/bhoomi/bhoomi/dist/
```

Make sure the path in `nginx.conf` matches:
```nginx
root /www/wwwroot/BhoomiTechzoneWebsite/bhoomi/bhoomi/dist;
```

### Step 3: Configure Nginx

**Option A: Using Panel (Recommended)**

If you use **BT-Panel, Plesk, cPanel with Nginx:**

1. Go to your website settings
2. Find "Nginx Configuration" or "Config Files"
3. **Replace entire content** with `nginx.conf` from project root
4. **Adjust these lines:**
   ```nginx
   # Line 28: Set your correct path
   root /www/wwwroot/YOUR_ACTUAL_PATH/dist;
   
   # Lines 32-33: Add your SSL certificate paths
   ssl_certificate /path/to/fullchain.pem;
   ssl_certificate_key /path/to/privkey.pem;
   ```
5. Save and reload Nginx

**Option B: SSH/Terminal**

```bash
# Backup existing config
sudo cp /etc/nginx/sites-available/bhoomitechzone.in /etc/nginx/sites-available/bhoomitechzone.in.backup

# Edit your site config
sudo nano /etc/nginx/sites-available/bhoomitechzone.in

# Paste content from nginx.conf (adjust paths)

# Test configuration
sudo nginx -t

# If OK, reload Nginx
sudo systemctl reload nginx
```

### Step 4: SSL Certificate Setup

**If you don't have SSL yet:**

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get free SSL certificate
sudo certbot --nginx -d bhoomitechzone.in -d www.bhoomitechzone.in

# Auto-renewal (already set up by certbot)
sudo certbot renew --dry-run
```

---

## 📊 Configuration Features

Your `nginx.conf` includes:

### ✅ Performance Optimizations
- ✅ Gzip compression (6 level)
- ✅ Long-term caching (1 year for static assets)
- ✅ Cache-Control with immutable flag
- ✅ HTML no-cache for SEO updates
- ✅ Service worker handling

### ✅ Security Headers (A+ Rating)
- ✅ HSTS with preload (1 year)
- ✅ Content-Security-Policy (allows CDN)
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: enabled
- ✅ Referrer-Policy: strict-origin
- ✅ Permissions-Policy: restricted
- ✅ Server tokens hidden

### ✅ SEO & Routing
- ✅ HTTP → HTTPS redirect (301)
- ✅ www → non-www redirect (301)
- ✅ SPA routing (React Router support)
- ✅ Proper robots.txt handling
- ✅ Sitemap.xml optimization

### ✅ File Protection
- ✅ Block .git, .env, package.json
- ✅ Block node_modules access
- ✅ Block hidden files (. prefix)

---

## 🔍 Verification After Deployment

### 1. Test Website Loading
```bash
# Check if site loads
curl -I https://bhoomitechzone.in

# Should return: HTTP/2 200
```

### 2. Test WWW Redirect
```bash
# Should redirect to non-www
curl -I https://www.bhoomitechzone.in

# Should return: HTTP/2 301
# Location: https://bhoomitechzone.in/
```

### 3. Test Security Headers
Visit: https://securityheaders.com/?q=https://bhoomitechzone.in
**Target: A+ Rating**

### 4. Test Performance
Visit: https://pagespeed.web.dev/
**Target: Performance 90+**

### 5. Test SSL
Visit: https://www.ssllabs.com/ssltest/
**Target: A+ Rating**

### 6. Test Routes
- https://bhoomitechzone.in/ ✅
- https://bhoomitechzone.in/about ✅
- https://bhoomitechzone.in/services ✅
- All should load without 404 errors

---

## 🛠️ Troubleshooting

### Issue: 404 on Routes (except homepage)

**Solution:**
```nginx
# Make sure this is in your config:
location / {
    try_files $uri $uri/ /index.html;
}
```

### Issue: CSS/JS Not Loading

**Solution:**
```nginx
# Check root path is correct
root /www/wwwroot/YOUR_PATH/dist;

# Make sure file permissions are correct
sudo chown -R www-data:www-data /www/wwwroot/YOUR_PATH/dist
sudo chmod -R 755 /www/wwwroot/YOUR_PATH/dist
```

### Issue: MIME Type Errors

**Solution:**
```nginx
# Add to http block (usually in main nginx.conf)
include /etc/nginx/mime.types;
default_type application/octet-stream;
```

### Issue: CORS Errors

**Solution:**
If you have an API on different domain:
```nginx
location /api/ {
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    proxy_pass http://your-api-server;
}
```

### Issue: Server Tokens Still Showing

**Solution:**
```bash
# Edit main nginx.conf
sudo nano /etc/nginx/nginx.conf

# Add in http block:
server_tokens off;
more_clear_headers 'Server';

# Install headers-more module if not installed
sudo apt install libnginx-mod-http-headers-more-filter
```

---

## 📝 Post-Deployment Checklist

- [ ] Build completed successfully (`npm run build`)
- [ ] Uploaded `dist/` folder to server
- [ ] Updated `nginx.conf` with correct paths
- [ ] Added SSL certificate paths
- [ ] Tested Nginx configuration (`nginx -t`)
- [ ] Reloaded Nginx (`systemctl reload nginx`)
- [ ] Verified HTTPS redirect (http → https)
- [ ] Verified WWW redirect (www → non-www)
- [ ] Tested all main routes load correctly
- [ ] Checked security headers (A+ rating)
- [ ] Ran Google Lighthouse test (90+ score)
- [ ] Submitted sitemap to Google Search Console
- [ ] Set up monitoring (analytics, error logs)

---

## 📈 Monitoring & Maintenance

### Enable Access Logs
```nginx
# Add to server block
access_log /var/log/nginx/bhoomitechzone_access.log;
error_log /var/log/nginx/bhoomitechzone_error.log;
```

### View Logs
```bash
# Access logs
sudo tail -f /var/log/nginx/bhoomitechzone_access.log

# Error logs
sudo tail -f /var/log/nginx/bhoomitechzone_error.log
```

### Enable Analytics
Add Google Analytics to your `index.html` (already configured in build)

### Core Web Vitals Monitoring
- Google Search Console
- PageSpeed Insights
- web.dev/measure

---

## 🎯 Expected Results After Deployment

| Metric | Target | How to Verify |
|--------|--------|---------------|
| **Performance** | 90+ | PageSpeed Insights |
| **Accessibility** | 95-100 | Lighthouse |
| **Best Practices** | 95+ | Lighthouse |
| **SEO** | 100 | Lighthouse |
| **Security Headers** | A+ | securityheaders.com |
| **SSL Rating** | A+ | ssllabs.com |
| **LCP** | < 2.5s | Core Web Vitals |
| **FID** | < 100ms | Core Web Vitals |
| **CLS** | < 0.1 | Core Web Vitals |
| **TTFB** | < 600ms | PageSpeed Insights |

---

## 🚨 Common Nginx Commands

```bash
# Test configuration
sudo nginx -t

# Reload Nginx (graceful, no downtime)
sudo systemctl reload nginx

# Restart Nginx (brief downtime)
sudo systemctl restart nginx

# Check Nginx status
sudo systemctl status nginx

# View Nginx version
nginx -v

# Check which config is loaded
sudo nginx -T

# Stop Nginx
sudo systemctl stop nginx

# Start Nginx
sudo systemctl start nginx
```

---

## 📞 Need Help?

### Check Nginx Logs
```bash
sudo tail -f /var/log/nginx/error.log
```

### Common Issues Documentation
- [Nginx Official Docs](https://nginx.org/en/docs/)
- [DigitalOcean Nginx Tutorials](https://www.digitalocean.com/community/tags/nginx)

---

## ✅ Summary

1. **Use `nginx.conf`** - NOT .htaccess
2. **Upload `dist/` folder** to server
3. **Configure Nginx** with provided config
4. **Add SSL certificate** paths
5. **Test & reload** Nginx
6. **Verify** all metrics (performance, security, SEO)

---

**Website:** https://bhoomitechzone.in  
**Status:** Production-Ready with Nginx Optimization  
**Last Updated:** March 17, 2026

**Happy Deploying! 🚀**
