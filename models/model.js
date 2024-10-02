const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
        Uname:{ type:String, required:true }, age:{ type:Number,required:true }, dob:{type:String, required:true }, line_info:{type:String,required:true }, code:{type:String, required:true}, field:{type:String, required:true }, aadhaar_no:{type:Number, required:true}, ression_info:{type:String, required:true }, name:{ type:String, }, family_info:{type:String, required:true }, ayushman_no:{type:String, required:true},
        medReport:[{
                Dates:{ type:String, required:true },
                hours:{type:String, required:true},
                b_p:{type:Number},
                h_p:{type:Number},
                Pulse:{type:Number},
                Temp:{type:Number},
                Suger_Level:{type:Number},
                Complain:{type:String},
                Paracetamol:{type:String},
                Avil:{type:String},
                Cetrizine:{type:String},
                Decolic:{type:String},
                Asthalin:{type:String},
                Neurobion_F:{type:String},
                Primulate_N:{type:String},
                Lasilactone:{type:String},
                Trenexamic:{type:String},
                Remark:{type:String},

        }],
        
               

}, {timestamps:true}
);

const workerUser = mongoose.model('workerData', workerSchema);

module.exports = workerUser;