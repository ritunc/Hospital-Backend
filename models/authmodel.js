const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
        name:{
                type:String,
                required:true,
        },
        email:{
                type:String,
                unique:true,
                // required:true,
        },
        password:{
                type:String,
                required:true,
        }
},{ timestamps:true}
);

const adminUser = mongoose.model('adminUserid', adminSchema);

module.exports = adminUser;