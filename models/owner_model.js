const mongoose = require('mongoose');
const { type } = require('os');




const userSchema = mongoose.Schema({
    fullname: {
        type:String,
        minLenght:3,
        trim:true
    },
    email: String,
    password: String,
    product: {
        type: Array,
        default: []
    },
    gstin: String,
    picture: String
});


module.exports = mongoose.model('user', userSchema);