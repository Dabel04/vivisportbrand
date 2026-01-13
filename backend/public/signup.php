<?php
// signup.php
include 'db_connect.php';

// Read the JSON sent by React
$data = json_decode(file_get_contents("php://input"));

if(isset($data->email) && isset($data->password)) {
    $email = $data->email;
    $password = $data->password;

    // 1. Check if email already exists
    $check = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $result = $check->get_result();

    if($result->num_rows > 0){
        echo json_encode(["success" => false, "message" => "Email already exists!"]);
        exit;
    }

    // 2. Hash the password (Security Rule #1)
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // 3. Insert into database
    $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $hashed_password);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Account created successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Database error"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}
?>