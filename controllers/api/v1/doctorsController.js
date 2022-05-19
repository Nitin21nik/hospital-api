const jwt=require('jsonwebtoken');//requiring the jsonwebtoken for encryption
const Doctor=require('../../../models/doctor');//requiring the doctor schema

//registering a Doctor on portal
module.exports.register=async function(req,res){
    try {
        let doctor = await Doctor.findOne({ email: req.body.email }); //checking if doctor already exists
        if (doctor) {
            //if doctor exists
            return res.status(409).json({
                message: 'Doctor already exists!'
            });
        } else {
            doctor = await Doctor.create(req.body); //creating a new doctor on the portal
            doctor=await doctor.toObject();//connverting to object format
            delete doctor.password;//removing the password field from doctor object to avoid it being seen
            return res.status(200).json({
                data:{
                    doctor:doctor   //passing the doctor in the data and returning it to the server
                },
                message: 'Doctor created successfully!'
            })
        }
    } catch(err){
        //catching errors
        console.log('Internal server error!!');
        return res.status(500).json({
            message: 'Internal Server Error'
        });
         
    }
}

//logging in of doctor and generating the jwt if the doctor matches in the database
module.exports.login=async function(req,res){
    try{
        let doctor=await Doctor.findOne({email:req.body.email});//try finding the doctor in the datbase and check if password matches
        if(!doctor || doctor.password!=req.body.password){
            return res.status(401).json({
                message:'Invalid username/password'
            });
        }

        return res.status(200).json({
            message:'Successfully Logged In',
            data:{
                token:jwt.sign(doctor.toJSON(),'hospital',{expiresIn:'1000000'})//generating the token using secretkey
            }
        })

    }catch(err){
        return res.status(500).json({
            message:'Internal Server Error'
        });
    }
}
