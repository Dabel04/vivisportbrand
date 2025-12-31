<?php
// backend/api/Models/Cart.php

class Cart {
    private $conn;
    private $table = 'cart';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function addToCart($user_id, $product_id, $quantity) {
        $check = "SELECT id, quantity FROM " . $this->table . " WHERE user_id = ? AND product_id = ?";
        $stmt = $this->conn->prepare($check);
        $stmt->execute([$user_id, $product_id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            $new_qty = $row['quantity'] + $quantity;
            $update = "UPDATE " . $this->table . " SET quantity = ? WHERE id = ?";
            $up_stmt = $this->conn->prepare($update);
            return $up_stmt->execute([$new_qty, $row['id']]);
        } else {
            $query = "INSERT INTO " . $this->table . " (user_id, product_id, quantity) VALUES (?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute([$user_id, $product_id, $quantity]);
        }
    }

    public function getCart($user_id) {
        $query = "SELECT c.id as cart_id, p.id as product_id, p.name, p.price, p.image, c.quantity, (p.price * c.quantity) as subtotal 
                  FROM " . $this->table . " c 
                  JOIN products p ON c.product_id = p.id 
                  WHERE c.user_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$user_id]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function updateQuantity($cart_id, $user_id, $quantity) {
        if ($quantity <= 0) {
            return $this->removeFromCart($cart_id, $user_id);
        }
        $query = "UPDATE " . $this->table . " SET quantity = ? WHERE id = ? AND user_id = ?";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([$quantity, $cart_id, $user_id]);
    }

    public function removeFromCart($cart_id, $user_id) {
        $query = "DELETE FROM " . $this->table . " WHERE id = ? AND user_id = ?";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([$cart_id, $user_id]);
    }
}