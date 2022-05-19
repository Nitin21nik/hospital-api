const express=require("express");//using express
const port=process.env.PORT || 8000; //defining the port number on which the server runs

const passport=require('passport');//requiring passport for authentication and authorization
const jwtPassportStrategy=require('./config/passport-jwt-strategy');//importing the jwt strategy

const db=require('./config/mongoose');//importing the mongodb connection

const app=express();

app.use(express.urlencoded());//middleware to parse the form data
app.use('/',require('./routes'));//middleware to manage the routes


app.listen(port,function(err){
    if(err){
        console.log('Error in running the server');
    }
    console.log(`Server is up and running on port: ${port}`);
});


