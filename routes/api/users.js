const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function not a regular url
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST : http://localhost:3001/api/users
router.post('/', usersCtrl.create);

// POST : http://localhost:3001/api/users/login
router.post('/login', usersCtrl.login);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn ,usersCtrl.checkToken);

module.exports = router;