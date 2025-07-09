const Booking = require('../models/booking');

class BookingRepository {

    async create(data) {
        try {
            console.log(data);
            const booking = await Booking.create(data);
            return booking;

        } catch (error) {
            console.log(error);
            throw error;


        }
    }
    async cancel(id) {
        try {

            const response = await Booking.findByIdAndUpdate(id, { status: 'Cancelled' , payment:'Refunding'}, {new:true});
            return response;

        } catch (error) {
            console.log('error in booking repo');
            throw error;


        }
    }
    async get(id) {
        try {
            const booking = await Booking.findById(id).populate([
                { path: 'user', select: 'name email' },
                { path: 'turf', select: 'name city' },
                { path : 'owner', select: 'name email'}
            ]);
            return booking;

        } catch (error) {
            console.log(error);
            throw error;


        }
    }

    async getAllByUser(userId) {
        try {
            const booking = await Booking.find({ user: userId });
            console.log(userId);
             if(!booking[0]._id){
                console.log('no booking present for user');
                throw({error : "no booking present for user"})
            }
            return booking;

        } catch (error) {
            console.log(error);
            throw error;


        }
    }

    async getAllByOwner(userId) {
        try {
            console.log(userId);
            const booking = await Booking.find({ owner: userId }).populate([
                { path: 'user', select: 'name' },
                { path: 'turf', select: 'name city' },
                { path : 'owner', select: 'name'}
            ]);
            console.log(booking);
             if(!booking[0]._id){
                console.log('no booking present for owner');
                throw({error : "no booking present for owner"})
            }
            return booking;

        } catch (error) {
            console.log(error);
            throw error;


        }
    }

}

module.exports = BookingRepository;