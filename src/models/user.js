const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {SALT} = require('../config/serverConfig');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true

        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, 'Please enter a valid email']

        },
        password: {
            type: String,
            required: true,
            maxlength: [10, "Password can be maximun 10 char"],
            minlength: [3, "Password can be minimum of 3 char"]

        },
        role: {
            type: String,
            enum: ['user', 'owner', 'admin'],
            required: true

        },

    },
    { timestamps: true }
)

userSchema.pre('save', async function(next) {

    if (!this.isModified('password')) return next();

    const encryptedPassword = await bcrypt.hashSync(this.password,SALT);
    this.password = encryptedPassword;
  
  next();
});


const User = mongoose.model('User', userSchema);

module.exports = User;