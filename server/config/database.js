const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.MONGOSB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology:true,
      
    })
    .then(()=> console.log("Db connection Sucessfull"))
    .catch((error)=>{
        console.log("Db connection failed");
        console.log(error);
        process.exit(1);
    })
};

module.exports = dbconnect;