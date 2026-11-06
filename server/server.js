const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Expanded Marketplace Products Database
const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
    price: 29990,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Apple Watch Series 9 GPS (Smartwatch)",
    price: 41900,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Herschel Minimalist Travel Backpack",
    price: 6499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Ergonomic Mesh Office Chair with Lumbar Support",
    price: 12999,
    category: "Home & Office",
    image: "https://images.unsplash.com/photo-1580481077494-e3299ac25e94?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Nike Air Max Running Shoes",
    price: 8995,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Stainless Steel Thermal Water Bottle (1 Liter)",
    price: 1299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 9495,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Mechanical RGB Gaming Keyboard",
    price: 4999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  }
];

// API Endpoint to fetch all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API Endpoint for processing orders
app.post('/api/orders', (req, res) => {
  const { cartItems, totalAmount } = req.body;
  res.status(201).json({
    success: true,
    message: "Order placed successfully!",
    orderId: Math.floor(100000 + Math.random() * 900000),
    totalAmount,
    itemsCount: cartItems.length
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});