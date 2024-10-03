const express = require('express');
require('dotenv').config();  // Nạp các biến môi trường từ .env

const animeRoutes = require('./routes/anime_route');  // Import route anime

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // Middleware xử lý dữ liệu JSON

// Sử dụng route anime cho trang chủ
app.use('/api/anime', animeRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
