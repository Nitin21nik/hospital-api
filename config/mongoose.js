const mongoose=require('mongoose');//requiring mongoose for conneceting with the database

mongoose.connect('mongodb://localhost/hospital_server');//connecting to mongodb

const db=mongoose.connection;//acquiring the connection to  the database

db.on('error',console.error.bind(console,'Error in connecting to mongodb server'));

db.once('open',function(){
    console.log('Successfully connected to mongodb');
});

module.exports=db;//exporting the db connection
