const mongoose = require("mongoose");

const profileDetailSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  mobileNumber: {
    type: String,
    default: "",
  },
  portfolio: {
    type: String,
    default: "",
  },
  careerObjective: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  education: [
    {
      qualification: {
        type: String,
        default: "",
      },
      percentage: {
        type: String,
        default: "",
      },
      institution: {
        type: String,
        default: "",
      },
      range: {
        type: String,
        default: "",
      },
      
    },
  ],
  skills: [
    {
      technology: {
        type: String,
        default: "",
      },
      rating: {
        type: String,
        default: "",
      },
    },
  ],
  experiences: [
    {
      company: {
        type: String,
        default: "",
      },
      years: {
        type: String,
        default: "",
      },
      place: {
        type: String,
        default: "",
      },
      range: {
        type: String,
        default: "",
      },
      jobDescription:{
        type:String,
        default:'',
      }
    },
  ],
  projects: [
    {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      range: {
        type: String,
        default: "",
      },
      technology:{
        type:String,
        default:'',
      }
    },
  ],
}, { timestamps: true , versionKey: false,}
);

module.exports = mongoose.model("ProfileDetail", profileDetailSchema);
