const passport=require('passport');//requiring passport
const JWTStrategy=require('passport-jwt').Strategy;//requriring the jwt strategy
const ExtractJWT=require('passport-jwt').ExtractJwt;//requiring the ExtractJwt to access the jwt from Authentication Header

const Doctor=require('../models/doctor');//requiring the doctor schema

let opts={        
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:"hospital"
}

passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){ //jwt strategy for authentication 
    Doctor.findById(jwtPayLoad._id,function(err,doctor){
        if(err){
            console.log('Error in finding doctor');
            return done(err);
        }
        if(doctor){
            return done(null,doctor);
        }
        else{
            return done(null,false);
        }
    });
}));

module.exports=passport;