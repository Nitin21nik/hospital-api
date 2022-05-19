const express=require('express');//requiring express
const router=express.Router();//requiring the router
const passport=require('passport');//requiring the passport

const patientsController=require('../../../controllers/api/v1/patientsController');//requiring the patientsController

router.post('/register',passport.authenticate('jwt',{session:false}),patientsController.register);//registering the patient by jwt authentication
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientsController.createReport);//creating the report by jwt authentication
router.get('/:id/all_reports',patientsController.allReports);//get request to find all reports of the patient

module.exports=router;