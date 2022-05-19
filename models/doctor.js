const mongoose=require('mongoose');//requiring mongoose

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Doctor=mongoose.model('Doctor',doctorSchema);//creating the doctorSchema in db
module.exports=Doctor;