const express=require('express');//requiring express
const router=express.Router();//requiring router
const reportsController=require('../../../controllers/api/v1/reportsController');

router.get('/:status',reportsController.getReports);//get request to fetch all the reports of a specific status

module.exports=router;