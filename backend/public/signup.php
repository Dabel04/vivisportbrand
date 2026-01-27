<?php
// signup.php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username) && isset($data->email) && isset($data->password)) {
    $username = $data->username;
    $email = $data->email;
    $password = $data->password;

    // 1. Check if EMAIL exists
    $checkEmail = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    if($checkEmail->get_result()->num_rows > 0){
        echo json_encode(["success" => false, "message" => "Email already exists!"]);
        exit;
    }

    // 2. Check if USERNAME exists
    $checkUser = $conn->prepare("SELECT username FROM users WHERE username = ?");
    $checkUser->bind_param("s", $username);
    $checkUser->execute();
    if($checkUser->get_result()->num_rows > 0){
        echo json_encode(["success" => false, "message" => "Username already taken!"]);
        exit;
    }

    // 3. Hash Password & Insert
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Note: We are now inserting the username too
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $hashed_password);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Account created successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Database error"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
}
?>