const express=require('express');//requiring express
const router=express.Router();//requiring router 

console.log('router is loaded');

router.get('/', function(req, res) {
    return res.json(400, {
        message: 'Welcome to Covid-19 ward.Please enter the correct routes from the documentation!!' 
    }
)});

router.use('/api', require('./api'));//redirecting to api route according to the request route

module.exports=router;