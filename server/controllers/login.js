const user = require("../models/usermodel")
var bcrypt = require("bcryptjs");
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
       const userValid = await user.findOne({email:email});

        if(userValid){

            const isMatch = await bcrypt.compare(password,userValid.password);

            if(!isMatch){
                // console.log("invalid details")
                res.status(422).json({ error: "invalid details"})
            }else{

                // token generate
                const token = await userValid.generateAuthtoken();

                // cookiegenerate
                res.cookie("usercookie",token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });

                const result = {
                    userValid,
                    token
                }
                 res.status(201).json({status:201,result})
            }
        }
        else{
            res.status(422).json({ error: "You are not Register Person"})
        }

    } catch (error) {
        // console.error(error);
         res.status(401).json(error);
        // console.log("catch block");
    }
};

module.exports = login;