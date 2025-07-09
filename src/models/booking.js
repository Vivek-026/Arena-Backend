const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        turf: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Turf',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        date: {
            type: Date,
            required: true
        },
        startTime: {
            type: String, 
            required: true,
            validate: {
                validator: function(v) {
                    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
                },
                message: 'Start time must be in HH:MM format (24-hour)'
            }
        },
        endDateTime: {
            type: Date, 
            // required: true
        },
        sport: {
            type: String,
            // required: true
        },
        payment: {
            type: String,
            enum: ['Pending', 'Paid', 'Refunding', 'Refunded'],
            default: 'Pending'
        },
        price: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            default: 1
        },
        status: {
            type: String,
            enum: ['Pending', 'Booked', 'Cancelled'],
            default: 'Pending'
        }
    },
    {
        timestamps: true
    }
);

bookingSchema.pre('save',function(next){

    this.status="Booked"

    next();

})



const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;