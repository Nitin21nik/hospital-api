const Doctor=require('../../../models/doctor');//requiring the doctor schema
const Patient=require('../../../models/patient');//requiring the patient schema
const Report=require('../../../models/report');//requiring the report schema

//registering a new patient in the app by the doctor
module.exports.register=async function(req,res){
    console.log(req.body);
    let patient=await Patient.findOne({phone:req.body.phone});//find patient if already registered
    if(patient){
        return res.status(405).json({
            data:{
                patient:patient
            },
            message:'Patient Already registered in the app!'
        });
    }

    try{
        let newPatient=await Patient.create(req.body);//register new patient in the database
        if(newPatient){
            return res.status(200).json({
                data:{
                    patient:newPatient
                },
                message:'New Patient Successfully registered!'
            });
        }
    }catch(err){
        return res.status(500).json({
            message:'Internal Server Error!'
        });
    }
}

//Generating the Patient's Report
module.exports.createReport=async function(req,res){
   
    console.log(req.body);
    let patientId=req.params.id; //accessing the patient id from request params
    let doctorId=req.body.doctor;//accessing the doctor id from request body

    try{
        let patient=await Patient.findById(patientId);//finding the patient from db using id
        let doctor=await Doctor.findById(doctorId);//finding the doctor from db using id

        if(patient && doctor){//only if patient and doctor exists in the db
            req.body.patient=patientId;//putting the patient id in request body
            let report=await Report.create(req.body);//create report by using request body
            if(report){   
                await patient.reports.push(report.id);//pushing the report id in the patient's report array
                await patient.save();
            }
            return res.status(200).json({ //returning the data containing report of the patient
                data:{
                    report:{
                        doctor:doctor.name,
                        patient:patient.name,
                        status:report.status,
                        date:report.createdAt
                    }
                },
                message:'Report created Successfully'
            });
        }

        else{
            return res.status(401).json({
                message:'Patient/Doctor is not registered'
            });
        }
   }
   catch(err){
        return res.status(500).json({
            message:'Internal Server Error'
        });
   }
}


//getting all reports of the Patient
module.exports.allReports=async function(req,res){
    try{
        let reports=await Report.find({patient:req.params.id}).sort("createdAt").populate('doctor').populate('patient');//finding all reports and populating doctor and patient 
        return res.status(200).json({
            data:{
                reports //returning all reports of the patient 
            },
            message:'All Reports of Patient'
        })
    }catch(err){
        return res.status(500).json({
            message:'Internal Server Error'
        });
    }
}