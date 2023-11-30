const user = require('../models/usermodel')

const validat = async(req,res)=>{
    try {
        const ValidUserOne = await user.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
}

module.exports = validat