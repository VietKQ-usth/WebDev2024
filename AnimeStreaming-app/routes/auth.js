const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router(); // Tạo đối tượng Router từ express

// Giả lập lưu trữ người dùng
let users = [];

// API cho đăng ký
router.post('/register', async (req, res) => {
    // Lấy email và password từ request body của người dùng
    const { email, password } = req.body;

    // Kiểm tra email và password
    if (!email || !password) {
        return res.status(400).json({ message: "Please provide an email and password" });
    }

    // Kiểm tra xem người dùng đã tồn tại chưa
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Email is already in use' });
    }

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Thêm người dùng mới vào danh sách giả lập
        const newUser = { email, password: hashedPassword };
        users.push(newUser);

        // Tạo JWT
        const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error while registering' });
    }
});

module.exports = router;
