const User = require("../models/usermodel");
const ProfileDetail = require('../models/profileDetail');

const userDataFetch = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
            .populate('profileDetail'); // Populate the 'profileDetail' field
            const newUser = user.profileDetail;
            // console.log(user.profileDetail);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Now, user.profileDetail contains the profile details
        res.status(200).json({ newUser });
      } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Server error' });
      }
  };
  
module.exports = userDataFetch;
