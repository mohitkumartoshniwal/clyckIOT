const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    googleID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    devices: {
        type: Array,
        default: []
    }
    // isVerified: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    // }
});

const User = mongoose.model('User', userSchema);

module.exports = User;