const express = require('express');

// Import controller vào route
const anime_controller = require('../controllers/anime_controller');
const router = express.Router();

router.get('/home', anime_controller.get_home_anime);

module.exports = router;