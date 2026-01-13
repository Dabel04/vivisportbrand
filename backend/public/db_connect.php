<?php
// db_connect.php
header("Access-Control-Allow-Origin: http://localhost:5173"); // Allow any frontend to talk to this
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "dabel"; 
$password = "go uni1234"; 
$dbname = "vivi_sportbrand";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}
?>