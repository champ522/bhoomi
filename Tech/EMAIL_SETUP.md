# Email Setup Instructions

## Simple PHP Mail Setup (No SMTP Required)

The contact forms now use PHP's built-in `mail()` function which doesn't require app passwords or SMTP configuration.

### Email Configuration

**Two separate email handlers:**

1. **send-email.php** - Handles Modal Popup Form
2. **send-contact-email.php** - Handles Contact Section Form

### Email Recipients

Both forms send emails to:
- **Primary Recipient**: info@btplsoft.com
- **CC Recipient**: sales@bhoomitechzone.in

### Setup Requirements

**No installation needed!** The forms work with PHP's default mail() function.

### For Hosting Servers

Most hosting providers (like cPanel, Hostinger, Bluehost, etc.) have mail() function enabled by default. Just upload the files and it will work.

### For Local Development (Optional)

If you want to test locally on XAMPP/WAMP/MAMP:

1. **For Windows (XAMPP):**
   - Open `php.ini` file
   - Find `[mail function]` section
   - Configure:
   ```ini
   SMTP = smtp.gmail.com
   smtp_port = 587
   sendmail_from = your-email@gmail.com
   ```

2. **For Mac (MAMP):**
   - Mac has built-in mail server
   - Usually works without configuration

3. **Better Alternative for Testing:**
   - Use a tool like [Mailtrap](https://mailtrap.io/) for testing
   - Or just upload to your hosting server for real testing

### Testing

1. Upload all files to your hosting server
2. Open the website in browser
3. Fill out any of the forms:
   - Hero section form
   - Contact section form
   - Modal popup form
4. Submit the form
5. Check info@btplsoft.com for the email
6. Verify sales@bhoomitechzone.in received it in CC

### Email Features

- ✅ HTML formatted emails
- ✅ Professional design
- ✅ All form data included
- ✅ Reply-to set to user's email
- ✅ Timestamp included
- ✅ No app passwords needed
- ✅ No SMTP configuration needed
- ✅ Works on most hosting providers

### Troubleshooting

**If emails don't arrive:**

1. **Check spam/junk folders** - First place to check
2. **Verify PHP mail() is enabled** - Contact your hosting provider
3. **Check server logs** - Look for mail errors in server error logs
4. **Test with simple script:**
   ```php
   <?php
   mail('your-email@example.com', 'Test', 'Test message');
   ?>
   ```
5. **Verify domain has valid DNS/MX records** - Some servers require this

**Common issues:**
- Some shared hosting blocks mail() to prevent spam
- Emails from localhost won't work (need real hosting)
- Some servers require a valid "From" address matching the domain

### Alternative: Keep PHPMailer (Advanced)

If you prefer using PHPMailer with SMTP:
1. Run: `composer require phpmailer/phpmailer`
2. Use the advanced configuration with SMTP credentials
3. Better for complex setups or when mail() is blocked

But for most cases, the simple mail() function works perfectly!
