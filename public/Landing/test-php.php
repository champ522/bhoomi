<?php
echo "PHP is working!\n\n";
echo "PHP Version: " . phpversion() . "\n";
echo "Server: " . $_SERVER['SERVER_SOFTWARE'] . "\n";
echo "Mail function available: " . (function_exists('mail') ? 'Yes' : 'No') . "\n";
echo "\nIf you can see this message, PHP is enabled on your server.";
?>
