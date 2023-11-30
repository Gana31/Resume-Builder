const jwt = require("jsonwebtoken");
const user = require("../models/usermodel");
const keysecret = process.env.SECRET_KEY;

const authdetail = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({ status: 401, message: "Unauthorized: Token missing or invalid" });
    }

    const token = authorizationHeader.split(" ")[1]; // Extract the token without "Bearer"

    const verifytoken = jwt.verify(token, keysecret);

    const rootUser = await user.findOne({ _id: verifytoken._id });

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(401).json({ status: 401, message: "Unauthorized: Invalid token" });
  }
};

module.exports = authdetail;
