const mongoose = require('mongoose');

const connect = async()=>{

    await mongoose.connect('mongodb://localhost:27017/arena');
    console.log("Mongo db connect")

}

module.exports = connect;