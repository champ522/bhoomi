# BTPLSOFT Landing Page - Setup Guide

## ✅ FIXED: Now Works on Localhost (XAMPP)!

Good news! The website now works perfectly on localhost for testing. All forms will save data to a file instead of trying to send emails (which requires mail server configuration).

## Quick Start

### For Local Testing (XAMPP/WAMP):
1. Install XAMPP from https://www.apachefriends.org/
2. Copy this folder to `C:\xampp\htdocs\btpllandingpage\`
3. Start Apache in XAMPP Control Panel
4. Open browser: `http://localhost/btpllandingpage/`
5. **View test emails**: `http://localhost/btpllandingpage/view-test-emails.html`

### For Live Hosting:
1. Upload all files to your hosting server
2. Emails will automatically be sent to info@btplsoft.com and sales@bhoomitechzone.in
3. No configuration needed!

## How It Works

### Development Mode (Localhost)
- ✅ Forms work instantly, no email server needed
- ✅ All submissions saved to `test-emails.txt` file
- ✅ View saved emails at: `view-test-emails.html`
- ✅ Perfect for testing and development

### Production Mode (Live Hosting)
- ✅ Real emails sent to info@btplsoft.com
- ✅ CC to sales@bhoomitechzone.in
- ✅ Professional HTML formatted emails
- ✅ Works automatically on most hosting providers

## Testing the Forms

1. Open: `http://localhost/btpllandingpage/`
2. Fill out any form (Hero, Contact, or Modal popup)
3. Submit the form
4. You'll see: "✓ SUCCESS (Development Mode)" message
5. View saved data: `http://localhost/btpllandingpage/view-test-emails.html`

## Email Configuration

Emails are automatically sent to:
- **Primary**: info@btplsoft.com
- **CC**: sales@bhoomitechzone.in

### Three Forms:
1. **Hero Section Form** → `send-hero-email.php`
2. **Contact Section Form** → `send-contact-email.php`
3. **Modal Popup Form** → `send-email.php`

## ⚠️ IMPORTANT: Must Use Web Server

**Don't double-click index.html!** It won't work.

❌ Wrong: `file:///C:/Users/.../index.html`
✅ Correct: `http://localhost/btpllandingpage/`

## Installation Steps

### Windows - XAMPP:
1. Download XAMPP from https://www.apachefriends.org/
2. Install XAMPP
3. Copy this entire folder to `C:\xampp\htdocs\btpllandingpage\`
4. Start Apache in XAMPP Control Panel
5. Open browser and go to: `http://localhost/btpllandingpage/`

### Windows - WAMP:
1. Download WAMP from https://www.wampserver.com/
2. Install WAMP
3. Copy this entire folder to `C:\wamp64\www\btpllandingpage\`
4. Start WAMP
5. Open browser and go to: `http://localhost/btpllandingpage/`

### Mac - MAMP:
1. Download MAMP from https://www.mamp.info/
2. Install MAMP
3. Copy this entire folder to `/Applications/MAMP/htdocs/btpllandingpage/`
4. Start MAMP servers
5. Open browser and go to: `http://localhost:8888/btpllandingpage/`

## Common Issues & Solutions

### ✅ Issue: Logo not showing
**Fixed!** Image paths are now relative and work in subdirectories.

### ✅ Issue: Forms not working on localhost
**Fixed!** Forms now save to `test-emails.txt` file when on localhost.

### Issue: Modal popup shows immediately
**Normal behavior** - It shows after 25 seconds. You can close it with the X button.

## File Structure

```
btpllandingpage/
├── index.html                 (Main website)
├── style.css                  (Styles)
├── send-email.php            (Modal form handler)
├── send-hero-email.php       (Hero form handler)
├── send-contact-email.php    (Contact form handler)
├── view-test-emails.html     (View saved test emails)
├── clear-test-emails.php     (Clear test emails)
├── test-emails.txt           (Auto-created when form submitted)
├── test-email.html           (System testing page)
├── test-php.php              (PHP test script)
├── images/                   (Images folder)
│   └── btplsoftlogo.png
├── README.md                 (This file)
└── EMAIL_SETUP.md            (Email setup details)
```

## Testing Workflow

1. **Start XAMPP** → Start Apache
2. **Open Website** → `http://localhost/btpllandingpage/`
3. **Submit Form** → Fill any form and submit
4. **View Test Emails** → `http://localhost/btpllandingpage/view-test-emails.html`
5. **Deploy** → Upload to hosting when ready

## Useful Links

- **Main Website**: `http://localhost/btpllandingpage/`
- **View Test Emails**: `http://localhost/btpllandingpage/view-test-emails.html`
- **PHP Test**: `http://localhost/btpllandingpage/test-email.html`

## Production Deployment

When deploying to your live server:
1. Upload ALL files via FTP/cPanel File Manager
2. Forms will automatically switch to production mode
3. Real emails will be sent to info@btplsoft.com
4. Test by submitting a form
5. Check your inbox!

## Features

✅ Three contact forms (Hero, Contact section, Modal popup)
✅ Phone number validation (only numbers)
✅ Name validation (only letters)
✅ Country code selector (USA & Canada)
✅ Mobile-responsive design
✅ Professional email templates
✅ Works on localhost AND live hosting
✅ No configuration needed

## Need Help?

1. Make sure you're accessing via `http://localhost/` not `file://`
2. Check if Apache is running in XAMPP
3. View test emails to see if forms are working
4. Check browser console (F12) for errors
5. All test emails are saved to `test-emails.txt`
