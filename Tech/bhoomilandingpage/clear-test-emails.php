<?php
header('Content-Type: application/json');

$logFile = 'test-emails.txt';

if (file_exists($logFile)) {
    if (unlink($logFile)) {
        echo json_encode(['success' => true, 'message' => 'Test emails cleared']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Could not delete file']);
    }
} else {
    echo json_encode(['success' => true, 'message' => 'No test emails to clear']);
}
?>
