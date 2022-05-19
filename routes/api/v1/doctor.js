const express=require('express');//requiring express
const router=express.Router();//requring router

const doctorsController=require('../../../controllers/api/v1/doctorsController');//requiring the doctorsController

router.post('/register',doctorsController.register);//post request to register the doctor
router.post('/login',doctorsController.login);// post request for logging the doctor
module.exports=router;