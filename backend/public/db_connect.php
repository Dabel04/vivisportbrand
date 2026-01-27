<?php
// db_connect.php
header("Access-Control-Allow-Origin: http://localhost:5174"); // Allow any frontend to talk to this
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


// 2. Allow specific methods (POST is what signup usually uses)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// 3. Allow specific headers (Content-Type is needed for JSON)
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// 4. Handle "Preflight" requests (Browsers send an OPTIONS request first)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

$host = "localhost";
$username = "dabel"; 
$password = "go uni1234"; 
$dbname = "vivi_sportbrand";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}
?>