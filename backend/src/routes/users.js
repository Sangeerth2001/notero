const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUserById } = require('../controllers/userController');

// GET /api/users
router.get('/', getUsers);

// POST /api/users
router.post('/', createUser);

// GET /api/users/:id
router.get('/:id', getUserById);

module.exports = router;