const jwt = require("jsonwebtoken");
const user = require("../models/usermodel");
const keysecret = process.env.SECRET_KEY


const autehnticate = async(req,res,next)=>{

    try {
        const token = req.headers.authorization;
        const verifytoken = jwt.verify(token,keysecret);
        
        const rootUser = await user.findOne({_id:verifytoken._id});
        
        if(!rootUser) {throw new Error("user not found")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (error) {
        res.status(401).json({status:401,message:"Unauthorized no token provide"})
    }
}


module.exports = autehnticate