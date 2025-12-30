<?php
// backend/api/Controllers/ProductController.php

// This tells PHP to look in the Models folder relative to THIS controller file
require_once __DIR__ . '/../Models/Product.php';

class ProductController {
    private $db;
    private $product;

    public function __construct($db) {
        $this->db = $db;
        // Now Product will be found because we required it above with an absolute path
        $this->product = new Product($db);
    }

    public function index() {
        $result = $this->product->getAll();
        $products = $result->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($products, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    }
}