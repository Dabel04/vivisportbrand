<?php
// signup.php
include 'db_connect.php';
include 'jwt_helper.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username) && isset($data->email) && isset($data->password)) {
    $username = $data->username;
    $email = $data->email;
    $password = $data->password;

    // 1. Check if EMAIL exists
    $checkEmail = $conn->prepare("SELECT email FROM users WHERE email = :email");
    $checkEmail->bindParam(':email', $email);
    $checkEmail->execute();
    if($checkEmail->rowCount() > 0){
        echo json_encode(["success" => false, "message" => "Email already exists!"]);
        exit;
    }

    // 2. Check if USERNAME exists
    $checkUser = $conn->prepare("SELECT username FROM users WHERE username = :username");
    $checkUser->bindParam(':username', $username);
    $checkUser->execute();
    if($checkUser->rowCount() > 0){
        echo json_encode(["success" => false, "message" => "Username already taken!"]);
        exit;
    }

    // 3. Hash Password & Insert
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $hashed_password);

    if ($stmt->execute()) {
        $userId = $conn->lastInsertId();

        // 4. Generate JWT for auto-login after signup
        $token = JwtHelper::createToken([
            "id" => $userId,
            "username" => $username,
            "email" => $email
        ]);

        echo json_encode([
            "success" => true, 
            "message" => "Account created successfully!",
            "token" => $token,
            "user" => [
                "id" => $userId,
                "username" => $username,
                "email" => $email
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Database error"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
}
?>