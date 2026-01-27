<?php
// login.php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->identifier) && isset($data->password)) {
    $identifier = $data->identifier; // This could be email OR username
    $password = $data->password;

    // 1. Search for a user where Email matches OR Username matches
    // We bind the same variable ($identifier) twice because we don't know which one it is.
    $stmt = $conn->prepare("SELECT id, username, email, password FROM users WHERE email = ? OR username = ?");
    $stmt->bind_param("ss", $identifier, $identifier);
    
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        // 2. Verify the password
        if (password_verify($password, $row['password'])) {
            // SUCCESS
            echo json_encode([
                "success" => true, 
                "message" => "Login successful", 
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