const express=require('express');//requiring express
const router=express.Router();//requiring router

router.use('/v1', require('./v1'));//redirecting to v1 route

module.exports=router;