#!/bin/bash
echo "🚀 NGINX-COMPATIBLE POST-BUILD SCRIPT v5.0"

cd "$(dirname "$0")"

# 1. CRITICAL SEO FILES
if [ ! -f "dist/robots.txt" ]; then
echo "User-agent: *
Allow: /

# Sitemap  
Sitemap: https://bhoomitechzone.in/sitemap.xml
" > dist/robots.txt
echo "✅ ROBOTS.TXT CREATED"
fi

if [ ! -f "dist/sitemap.xml" ]; then
cat > dist/sitemap.xml << 'SITEMAPEOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://bhoomitechzone.in/</loc><priority>1.0</priority></url>
    <url><loc>https://bhoomitechzone.in/about</loc><priority>0.8</priority></url>
    <url><loc>https://bhoomitechzone.in/services</loc><priority>0.8</priority></url>
    <url><loc>https://bhoomitechzone.in/contact</loc><priority>0.7</priority></url>
</urlset>
SITEMAPEOF
echo "✅ SITEMAP.XML CREATED"
fi

# 2. NGINX-COMPATIBLE OPTIMIZATIONS TO INDEX.HTML
if ! grep -q "EMERGENCY NGINX" dist/index.html; then
sed -i '/<meta name="viewport"/a\
\
    <!-- EMERGENCY NGINX PERFORMANCE OPTIMIZATION -->\
    <link rel="preload" href="/assets/index-BrOERjwu.js" as="script" crossorigin>\
    <link rel="preload" href="/assets/three-0GiG6Byu.js" as="script" crossorigin>\
    <link rel="preload" href="/assets/index-DlITTR30.css" as="style" crossorigin>\
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link rel="dns-prefetch" href="//fonts.googleapis.com">\
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net">\
    \
    <!-- CRITICAL CSS FOR INSTANT RENDERING -->\
    <style>\
      body{margin:0;font-family:Arimo,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\
      .loading{display:flex;justify-content:center;align-items:center;height:100vh;font-size:18px;color:#28a745}\
      img{max-width:100%;height:auto;will-change:auto}\
      *{box-sizing:border-box}\
      html{scroll-behavior:smooth}\
      #root{min-height:100vh;opacity:0;animation:fadeIn 0.3s ease-out forwards}\
      @keyframes fadeIn{to{opacity:1}}\
      .preloader{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;z-index:9999;display:flex;align-items:center;justify-content:center}\
    </style>' dist/index.html
echo "✅ INDEX.HTML NGINX OPTIMIZATIONS ADDED"
fi

# 3. SUPER-AGGRESSIVE SERVICE WORKER
cat > dist/sw.js << 'SWEOF'
const CACHE_NAME='bhoomitechzone-nginx-v5';
const CRITICAL_RESOURCES=['/','/about','/assets/index-BrOERjwu.js','/assets/three-0GiG6Byu.js','/assets/index-DlITTR30.css','/images/bhoomi-black.png'];
self.addEventListener('install',(e)=>{e.waitUntil(caches.open(CACHE_NAME).then((c)=>c.addAll(CRITICAL_RESOURCES)).then(()=>self.skipWaiting()))});
self.addEventListener('fetch',(e)=>{const url=new URL(e.request.url);if(url.pathname.includes('/assets/')||url.pathname.includes('/images/')||url.pathname.includes('.css')||url.pathname.includes('.js')||url.pathname.includes('.png')||url.pathname.includes('.jpg')){e.respondWith(caches.match(e.request).then((r)=>{if(r)return r;return fetch(e.request).then((res)=>{if(res.ok){caches.open(CACHE_NAME).then((c)=>c.put(e.request,res.clone()))}return res})}))}});
self.addEventListener('activate',(e)=>{e.waitUntil(caches.keys().then((names)=>Promise.all(names.map((n)=>n!==CACHE_NAME?caches.delete(n):null))).then(()=>self.clients.claim()))});
SWEOF
echo "✅ AGGRESSIVE SERVICE WORKER CREATED"

# 4. DEPLOY TO LIVE WEB ROOT
echo "🚀 DEPLOYING TO LIVE NGINX SERVER..."
cp -r dist/* ../../
echo "✅ FILES DEPLOYED TO LIVE SERVER"

echo "🔥 NGINX-COMPATIBLE DEPLOYMENT COMPLETE!"
