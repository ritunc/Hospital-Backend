const mongoose = require('mongoose');

const adminSessionID = new mongoose.Schema({
        uuid:{
                type:String,
                required:true,
                unique:true,
        },
        email: {
                type:String,
                required:true,
        },
        password:{
                type:String,
                required:true,
        }
},{timestamps:true});

const adminCookie = mongoose.model('cookie', adminSessionID);

module.exports = adminCookie;