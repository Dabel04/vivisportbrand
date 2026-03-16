<?php
// login.php
include 'db_connect.php';
include 'jwt_helper.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->identifier) && isset($data->password)) {
    $identifier = $data->identifier; // This could be email OR username
    $password = $data->password;

    // 1. Search for a user where Email matches OR Username matches
    $stmt = $conn->prepare("SELECT id, username, email, password FROM users WHERE email = :id1 OR username = :id2");
    $stmt->bindParam(':id1', $identifier);
    $stmt->bindParam(':id2', $identifier);
    
    $stmt->execute();
    $row = $stmt->fetch();

    if ($row) {
        // 2. Verify the password
        if (password_verify($password, $row['password'])) {
            // 3. Generate JWT
            $token = JwtHelper::createToken([
                "id" => $row['id'],
                "username" => $row['username'],
                "email" => $row['email']
            ]);

            // SUCCESS
            echo json_encode([
                "success" => true, 
                "message" => "Login successful", 
                "token" => $token,
                "user" => [
                    "id" => $row['id'],
                    "username" => $row['username'],
                    "email" => $row['email']
                ]
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid credentials"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "User not found"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing username/email or password"]);
}
?>