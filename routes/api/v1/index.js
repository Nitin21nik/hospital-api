const express=require('express');//requiring express
const router=express.Router();//requiring router

router.use('/doctor', require('./doctor'));//redirecting to the doctor route
router.use('/patient', require('./patient'));//redirecting to the patient route
router.use('/report', require('./report'));//redirecting to the repor route

module.exports=router;