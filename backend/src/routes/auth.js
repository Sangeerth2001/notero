const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', auth, getMe);

// Test route
router.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'Auth route is working!' 
  });
});

module.exports = router;