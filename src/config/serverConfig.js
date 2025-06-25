const dotenv = require('dotenv');
const { model } = require('mongoose');
const bcrypt = require('bcrypt')

dotenv.config();

module.exports={
    PORT: process.env.PORT,
    SALT :  bcrypt.genSaltSync(10),
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY
}