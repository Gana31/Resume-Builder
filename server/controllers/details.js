const user = require('../models/usermodel');
const ProfileDetail = require('../models/profileDetail');

const details = async (req, res) => {
  try {
    // Access the data from the request body
    const data = req.body;

    // Find the user by ID based on the JWT token
    const userId = req.userId;

    // Find the existing profileDetail
    let existingUser = await user.findById(userId).populate('profileDetail');

    if (existingUser) {
      // If the user already has a profileDetail, update it
      const existingProfileDetail = existingUser.profileDetail;

      if (existingProfileDetail) {
        existingProfileDetail.firstName = data.firstName  ||  existingProfileDetail.firstName;;
        existingProfileDetail.lastName = data.lastName  ||  existingProfileDetail.lastName;;
        existingProfileDetail.email = data.email  ||  existingProfileDetail.email;;
        existingProfileDetail.mobileNumber = data.mobileNumber  ||  existingProfileDetail.mobileNumber;;
        existingProfileDetail.portfolio = data.portfolio  ||  existingProfileDetail.portfolio;;
        existingProfileDetail.careerObjective = data.careerObjective  ||  existingProfileDetail.careerObjective;;
        existingProfileDetail.address = data.address  ||  existingProfileDetail.address;;
        existingProfileDetail.experiences = data.experiences  ||  existingProfileDetail.experiences;;
        existingProfileDetail.projects = data.projects  ||  existingProfileDetail.projects;;
        existingProfileDetail.education = data.education  ||  existingProfileDetail.education;;
        existingProfileDetail.skills = data.skills  ||  existingProfileDetail.skills;;

        // Save the updated profileDetail
        await existingProfileDetail.save();
        // console.log(existingProfileDetail);
      }
    } else {
      // If the user doesn't have a profileDetail, create one
      const newProfileDetail = new ProfileDetail({
        user: userId,
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email || '',
        mobileNumber: data.mobileNumber || '',
        portfolio: data.portfolio || '',
        careerObjective: data.careerObjective || '',
        address: data.address || '',
        experiences: data.experiences || [[],[],[],[],[]],
        projects: data.projects || [[],[],[],[]],
        education: data.education || [[],[],[],[]],
        skills: data.skills || [[],[]],
      });
    
      try {
        // Save the new profileDetail
        await newProfileDetail.save();
        
        existingUser.profileDetail = newProfileDetail;
        await existingUser.save();
    
        // Return a response indicating success
        res.status(200).json({ message: 'Profile details created successfully' });
      } catch (error) {
        console.error('Error creating profile details:', error);
        res.status(500).json({ error: 'Server error' });
      }
    }

    // Respond with a success message
    return res.json({ message: 'Profile data updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating profile data', error: error.message });
  }
};

module.exports = details;
