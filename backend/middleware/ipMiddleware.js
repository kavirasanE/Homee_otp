import express from 'express';

// implement a middleware which 
// should allow user to call the api only from
// specific IP address 
// (Allow this IP: 122.165.67.11, and block this ip: 49.207.179.138)

const ipMiddleware =async (req,res,next) => {
   const allowedIP = "122.165.67.11";
   const reqIP = req.body.IP;
   try{
      if(allowedIP == reqIP){
       next();
      }
   }
   catch(err) {
    res.status(400).send({message : err.message})
    console.log(err.message)
   }

}

export default ipMiddleware;
