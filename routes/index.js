const express=require('express');//requiring express
const router=express.Router();//requiring router 

console.log('router is loaded');

router.use('/api', require('./api'));//redirecting to api route according to the request route

module.exports=router;