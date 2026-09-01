<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

$fullName    = isset($_POST['fullName'])    ? trim($_POST['fullName'])    : '';
$email       = isset($_POST['email'])       ? trim($_POST['email'])       : '';
$mobile      = isset($_POST['mobile'])      ? trim($_POST['mobile'])      : '';
$countryCode = isset($_POST['countryCode']) ? trim($_POST['countryCode']) : '';
$project     = isset($_POST['project'])     ? trim($_POST['project'])     : '';
$description = isset($_POST['description']) ? trim($_POST['description']) : '';

if (empty($fullName) || empty($email) || empty($mobile) || empty($project)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

$projectNames = [
    'business-website' => 'Business Website / Web Application',
    'mobile-app'       => 'Mobile App for My Business',
    'ecommerce'        => 'Ecommerce Platform (B2C / B2B)',
    'startup-mvp'      => 'Startup Product (MVP / PoC)',
    'custom-software'  => 'Custom Business Software',
    'software-upgrade' => 'Software Upgrade / Enhancement',
    'maintenance'      => 'Maintenance & Support',
];
$projectName = isset($projectNames[$project]) ? $projectNames[$project] : $project;

$to      = 'info@bhoomitechzone.in';
$cc      = 'sales@bhoomitechzone.in';
$subject = 'New Project Inquiry from ' . $fullName . ' (Modal Form)';

$htmlBody = '
<html><head><style>
    body{font-family:Arial,sans-serif;line-height:1.6;color:#333}
    .container{max-width:600px;margin:0 auto;padding:20px}
    .header{background:#0d6efd;color:#fff;padding:20px;text-align:center;border-radius:5px 5px 0 0}
    .content{padding:20px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:0 0 5px 5px}
    .field{margin-bottom:15px;padding:10px;background:#fff;border-radius:3px}
    .label{font-weight:bold;color:#0d6efd;margin-bottom:5px}
    .footer{text-align:center;margin-top:20px;color:#6c757d;font-size:12px}
</style></head><body>
<div class="container">
    <div class="header"><h2 style="margin:0">New Project Inquiry</h2>
        <p style="margin:5px 0 0;font-size:14px">Bhoomi Tech Zone - Modal Form</p></div>
    <div class="content">
        <div class="field"><div class="label">Full Name:</div><div>' . htmlspecialchars($fullName) . '</div></div>
        <div class="field"><div class="label">Email:</div><div><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></div></div>
        <div class="field"><div class="label">Mobile:</div><div>' . htmlspecialchars($countryCode . ' ' . $mobile) . '</div></div>
        <div class="field"><div class="label">Project Type:</div><div>' . htmlspecialchars($projectName) . '</div></div>
        <div class="field"><div class="label">Description:</div><div>' . nl2br(htmlspecialchars($description ?: 'Not provided')) . '</div></div>
        <div class="footer"><p>Bhoomi Tech Zone Website - Modal Form</p><p>Received: ' . date('F j, Y, g:i a') . '</p></div>
    </div>
</div></body></html>';

$headers  = "From: Bhoomi Tech Zone <info@bhoomitechzone.in>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "CC: " . $cc . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if (mail($to, $subject, $htmlBody, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your inquiry has been submitted successfully. We will contact you within 24 hours.']);
} else {
    error_log('[send-email] mail() failed');
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly at info@bhoomitechzone.in']);
}
?>
