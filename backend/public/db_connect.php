<?php
// db_connect.php
header("Access-Control-Allow-Origin: *"); // Allow any frontend to talk to this
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle "Preflight" requests (Browsers send an OPTIONS request first)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$host = "localhost";
$username = "root"; // Using root by default for local XAMPP/WAMP
$password = ""; // Empty by default for local XAMPP/WAMP
$dbname = "vivi_sportbrand";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Enforce default fetch mode
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $e->getMessage()]));
}
?>