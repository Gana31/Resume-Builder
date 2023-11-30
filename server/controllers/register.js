const user = require("../models/usermodel");
const ProfileDetail = require('../models/profileDetail');

const register = async (req, res) => {
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await user.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const newProfileDetail = new ProfileDetail();

            // Save the ProfileDetail
            await newProfileDetail.save();

            // Create the User with a reference to the ProfileDetail
            const finalUser = new user({
                fname,
                email,
                password,
                cpassword,
                profileDetail: newProfileDetail._id,
            });

            // Save the User
            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

  };
  
  module.exports = register;
  