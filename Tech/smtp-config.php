<?php
// ============================================================
// SMTP CONFIGURATION - Edit these values only
// ============================================================

define('SMTP_HOST',       'smtp.office365.com');       // Microsoft 365 SMTP (MX = bhoomitechzone-in.mail.protection.outlook.com)
define('SMTP_PORT',       587);                        // 587 for STARTTLS
define('SMTP_SECURE',     'tls');                      // 'tls' = STARTTLS
define('SMTP_USERNAME',   'info@bhoomitechzone.in');   // Your Microsoft 365 email
define('SMTP_PASSWORD',   'YOUR_SMTP_PASSWORD_HERE');  // Microsoft 365 password or App Password
define('SMTP_FROM_EMAIL', 'info@bhoomitechzone.in');   // Sender address (must match SMTP_USERNAME for most hosts)
define('SMTP_FROM_NAME',  'Bhoomi Tech Zone');         // Sender display name
define('MAIL_TO',         'info@bhoomitechzone.in');   // Primary recipient
define('MAIL_CC',         'sales@bhoomitechzone.in');  // CC recipient

// ============================================================
// PHPMailer helper — used by all three form handlers
// ============================================================
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function createMailer() {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USERNAME;
    $mail->Password   = SMTP_PASSWORD;
    $mail->SMTPSecure = (SMTP_SECURE === 'ssl') ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';
    $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
    return $mail;
}
