const mongoose=require('mongoose');//requiring mongoose

const reportSchema=new mongoose.Schema({
   doctor:{// defines the doctor who created the report using ObjectId
       type:mongoose.Schema.Types.ObjectId,
       ref:'Doctor',
       required:true
   },

   patient:{// defines the patient whose report is created using ObjectId
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:true
   },

   status:{
       type:String,
       enum:['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive'],//using enums for status of patient
       required:true
   }
},
{
    timestamps:true
});

const Report=mongoose.model('Report',reportSchema);//creating the report schema
module.exports=Report;