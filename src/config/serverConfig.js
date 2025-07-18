const dotenv = require('dotenv');
const bcrypt = require('bcrypt')

dotenv.config();

module.exports={
    PORT: process.env.PORT,
    SALT :  bcrypt.genSaltSync(10),
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY,
    EMAIL_ID:process.env.EMAIL_ID,
    EMAIL_PASS:process.env.EMAIL_PASS
}