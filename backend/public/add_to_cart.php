<?php
// add_to_cart.php
include 'db_connect.php';
include 'jwt_helper.php';

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Only POST requests allowed"]);
    exit;
}

// 1. Get the JWT from Authorization header
$token = JwtHelper::getBearerToken();

if (!$token) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "No token provided. Please log in."]);
    exit;
}

// 2. Verify the JWT
$decoded = JwtHelper::verifyToken($token);

if (!$decoded) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Invalid or expired token. Please log in again."]);
    exit;
}

$user_id = $decoded->id;

// 3. Get the cart data from the request body
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->product_id) || !isset($data->quantity)) {
    echo json_encode(["success" => false, "message" => "Missing product_id or quantity"]);
    exit;
}

$product_id = $data->product_id;
$quantity = (int) $data->quantity;
$size = isset($data->size) ? $data->size : null;
$color_value = isset($data->color_value) ? $data->color_value : null;
$color_name = isset($data->color_name) ? $data->color_name : null;

// 4. Check if this exact item (same product, size, color) is already in the cart
$checkStmt = $conn->prepare(
    "SELECT id, quantity FROM cart WHERE user_id = :user_id AND product_id = :product_id AND size = :size AND color_value = :color_value"
);
$checkStmt->bindParam(':user_id', $user_id);
$checkStmt->bindParam(':product_id', $product_id);
$checkStmt->bindParam(':size', $size);
$checkStmt->bindParam(':color_value', $color_value);
$checkStmt->execute();
$existing = $checkStmt->fetch();

if ($existing) {
    // Update the quantity
    $newQuantity = $existing['quantity'] + $quantity;
    $updateStmt = $conn->prepare("UPDATE cart SET quantity = :quantity WHERE id = :id");
    $updateStmt->bindParam(':quantity', $newQuantity);
    $updateStmt->bindParam(':id', $existing['id']);
    
    if ($updateStmt->execute()) {
        echo json_encode(["success" => true, "message" => "Cart updated", "action" => "updated"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update cart"]);
    }
} else {
    // Insert a new cart row
    $insertStmt = $conn->prepare(
        "INSERT INTO cart (user_id, product_id, quantity, size, color_value, color_name) VALUES (:user_id, :product_id, :quantity, :size, :color_value, :color_name)"
    );
    $insertStmt->bindParam(':user_id', $user_id);
    $insertStmt->bindParam(':product_id', $product_id);
    $insertStmt->bindParam(':quantity', $quantity);
    $insertStmt->bindParam(':size', $size);
    $insertStmt->bindParam(':color_value', $color_value);
    $insertStmt->bindParam(':color_name', $color_name);
    
    if ($insertStmt->execute()) {
        echo json_encode(["success" => true, "message" => "Item added to cart", "action" => "added"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add to cart"]);
    }
}
?>
