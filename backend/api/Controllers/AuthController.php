<?php
// backend/api/Controllers/AuthController.php

require_once __DIR__ . '/../Models/User.php';

class AuthController {
    private $userModel;

    public function __construct($db) {
        $this->userModel = new User($db);
    }

    public function register() {
        // Read the JSON sent from the frontend (React)
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->username) && !empty($data->email) && !empty($data->password)) {
            if ($this->userModel->create($data->username, $data->email, $data->password)) {
                http_response_code(201);
                echo json_encode(["message" => "User registered successfully."]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Unable to register user."]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Incomplete data."]);
        }
    }

    // backend/api/Controllers/AuthController.php

    public function login() {
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->email) && !empty($data->password)) {
            $user = $this->userModel->emailExists($data->email);

            // Check if user exists and password matches the hash
            if ($user && password_verify($data->password, $user['password'])) {
                
                // In a real production app, you'd generate a JWT here.
                // For now, we'll return user info to keep it simple but functional.
                http_response_code(200);
                echo json_encode([
                    "message" => "Login successful.",
                    "user" => [
                        "id" => $user['id'],
                        "username" => $user['username'] ?? 'User',
                        "email" => $data->email
                    ]
                ]);
            } else {
                http_response_code(401); // Unauthorized
                echo json_encode(["message" => "Invalid email or password."]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Incomplete data."]);
        }
    }
}