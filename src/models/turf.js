const mongoose = require('mongoose');

const turfSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    price:{
      type:Number
    },
    description:{
      type: String
    },
    sports: [{
      type: String,
      trim: true
    }],
    amenities: [{
      type: String,
      trim: true
    }],
    booking: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }]
  },
  {
    timestamps: true
  }
);

const Turf = mongoose.model('Turf', turfSchema);
module.exports = Turf;
