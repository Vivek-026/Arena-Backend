
const express = require('express');

const router = express.Router();

const {UserController} = require('../../controllers/index');
const {TurfController} = require('../../controllers/index');
const {BookingController} = require('../../controllers/index');
const verifyOwner = require('../../middlewares/booking-middleware');


router.post('/signup', UserController.create );
router.delete('/users/:id', UserController.destroy );
router.get('/users/:id', UserController.get );
router.post('/signin', UserController.signin );
router.post('/isAuthenticated', UserController.isAuthenticated );

router.post('/turf', TurfController.create);
router.delete('/turf/:id', TurfController.destroy);
router.get('/turf/:id', TurfController.get);
router.get('/turf', TurfController.getAll);
router.patch('/turf/:id', TurfController.update);

router.post('/bookings', BookingController.create);
router.patch('/bookings/:id', BookingController.cancel);
router.get('/bookings/:id', BookingController.get);
router.get('/user/bookings/:id', BookingController.getAllByUser);
router.get('/owner/bookings/:id', BookingController.getAllByOwner);

module.exports = router;