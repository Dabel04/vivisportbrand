<?php
// backend/api/Models/User.php

class User {
    private $conn;
    private $table = 'users';

    public function __construct($db) {
        $this->conn = $db;
    }

    // Check if email exists
    public function emailExists($email) {
        $query = "SELECT id, password FROM " . $this->table . " WHERE email = ? LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$email]);
        return $stmt->fetch();
    }

    // Create new user
    public function create($username, $email, $password) {
        $query = "INSERT INTO " . $this->table . " (username, email, password) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        
        // Hash the password before saving!
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        
        return $stmt->execute([$username, $email, $hashed_password]);
    }
}