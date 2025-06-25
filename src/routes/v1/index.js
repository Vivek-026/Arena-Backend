
const express = require('express');

const router = express.Router();

const {UserController} = require('../../controllers/index');

router.post('/signup', UserController.create );
router.delete('/users/:id', UserController.destroy );
router.get('/users/:id', UserController.get );
router.post('/signin', UserController.signin );
router.post('/isAuthenticated', UserController.isAuthenticated );

module.exports = router;