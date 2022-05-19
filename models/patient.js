const mongoose=require('mongoose');//requiring mongoose

const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    phone:{ 
        type:Number,
        required:true,
        unique:true
    },

    reports:[{ //maintaing an array of patient's reports
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }]
},
{
    timestamps:true
});

const Patient=mongoose.model('Patient',patientSchema);//creating the patient schema
module.exports=Patient;