<?php
// backend/api/Controllers/CartController.php

require_once __DIR__ . '/../Models/Cart.php';

class CartController {
    private $cartModel;

    public function __construct($db) {
        $this->cartModel = new Cart($db);
    }

    public function add() {
        $data = json_decode(file_get_contents("php://input"));
        if (!empty($data->user_id) && !empty($data->product_id)) {
            $qty = $data->quantity ?? 1;
            if ($this->cartModel->addToCart($data->user_id, $data->product_id, $qty)) {
                echo json_encode(["message" => "Item added to cart."]);
            }
        }
    }

    public function fetch($user_id) {
        $items = $this->cartModel->getCart($user_id);
        echo json_encode($items, JSON_UNESCAPED_SLASHES);
    }

    public function update() {
        $data = json_decode(file_get_contents("php://input"));
        if (!empty($data->cart_id) && !empty($data->user_id) && isset($data->quantity)) {
            if ($this->cartModel->updateQuantity($data->cart_id, $data->user_id, $data->quantity)) {
                echo json_encode(["message" => "Quantity updated."]);
            }
        }
    }

    public function remove() {
        $data = json_decode(file_get_contents("php://input"));
        if (!empty($data->cart_id) && !empty($data->user_id)) {
            if ($this->cartModel->removeFromCart($data->cart_id, $data->user_id)) {
                echo json_encode(["message" => "Item removed from cart."]);
            }
        }
    }
}