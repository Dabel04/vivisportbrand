<?php
// backend/public/index.php

// 1. SECURITY HEADERS - Allowing the React frontend to talk to us
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// 2. PREFLIGHT HANDLER - Crucial for POST and DELETE requests from browsers
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 3. CORE REQUIRES - Bringing in the heavy hitters
require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../api/Controllers/ProductController.php';
require_once __DIR__ . '/../api/Controllers/AuthController.php';
require_once __DIR__ . '/../api/Controllers/CartController.php';

// 4. DATABASE INITIALIZATION
$database = new Database();
$db = $database->connect();

// 5. THE ROUTER - Extracting the Path and Method
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

// 6. ROUTE DISPATCHER
switch ($requestUri) {
    
    // --- PRODUCT ROUTES ---
    case '/':
    case '/index.php':
    case '/products':
        if ($requestMethod === 'GET') {
            $controller = new ProductController($db);
            $controller->index();
        }
        break;

    // --- AUTH ROUTES ---
    case '/register':
        if ($requestMethod === 'POST') {
            $controller = new AuthController($db);
            $controller->register();
        }
        break;

    case '/login':
        if ($requestMethod === 'POST') {
            $controller = new AuthController($db);
            $controller->login();
        }
        break;

    // --- CART ROUTES (THE MONEY) ---
    case '/add-to-cart':
        if ($requestMethod === 'POST') {
            $controller = new CartController($db);
            $controller->add();
        }
        break;

    case '/cart':
        if ($requestMethod === 'GET') {
            // Expecting URL like: /cart?user_id=1
            $user_id = $_GET['user_id'] ?? null;
            if ($user_id) {
                $controller = new CartController($db);
                $controller->fetch($user_id);
            } else {
                http_response_code(400);
                echo json_encode(["message" => "User ID required"]);
            }
        }
        break;
    
        
    // Update Quantity
    case '/update-cart':
        if ($requestMethod === 'POST') { // Or PATCH
            $controller = new CartController($db);
            $controller->update();
        }
        break;

    // Remove Item
    case '/remove-from-cart':
        if ($requestMethod === 'POST' || $requestMethod === 'DELETE') {
            $controller = new CartController($db);
            $controller->remove();
        }
        break;
        
        
    // --- 404 NOT FOUND ---
    default:
        http_response_code(404);
        echo json_encode([
            "message" => "Route $requestUri not found",
            "available_routes" => ["/products", "/register", "/login", "/add-to-cart", "/cart"]
        ]);
        break;
}