const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000, image: "laptop.webp" },
  { id: 2, name: "Shirt", category: "Clothing", price: 50, image: "shirt.jpg" },
  { id: 3, name: "Phone", category: "Electronics", price: 700, image: "mobile.jpg" },
  { id: 4, name: "Shoes", category: "Footwear", price: 120, image: "shoes.webp" },
  { id: 5, name: "Tablets", category: "Electronics", price: 1200, image: "tablet.webp" },
  { id: 6, name: "Kurti", category: "Clothing", price: 270, image: "kurti.jpg" },
  { id: 7, name: "Sandles", category: "Footwear", price: 150, image: "sandle.webp" },
  { id: 8, name: "Room Furniture", category: "Furniture", price: 3000, image: "furniture.jpeg" },
];


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
