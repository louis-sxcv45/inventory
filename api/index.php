<?php

// Error reporting untuk debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Force HTTPS for Laravel
$_SERVER['HTTPS'] = 'on';
$_SERVER['SERVER_PORT'] = 443;

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Check if autoload exists
if (file_exists(__DIR__.'/../vendor/autoload.php')) {
    require __DIR__.'/../vendor/autoload.php';
} else {
    die('Error: vendor/autoload.php not found. Please run composer install.');
}

// Check if bootstrap/app.php exists
if (file_exists(__DIR__.'/../bootstrap/app.php')) {
    $app = require_once __DIR__.'/../bootstrap/app.php';
} else {
    die('Error: bootstrap/app.php not found.');
}

try {
    $kernel = $app->make(Kernel::class);

    $response = $kernel->handle(
        $request = Request::capture()
    );

    $response->send();

    $kernel->terminate($request, $response);
} catch (Exception $e) {
    die('Laravel Error: ' . $e->getMessage());
}
?>