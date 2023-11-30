const express = require('express');
const router = express.Router();
const login = require("../controllers/login")
const register = require("../controllers/register")
const validat = require('../controllers/validator')
const autehnticate = require('../auth/autehnticate')
const logout = require('../controllers/logout')
const details= require('../controllers/details');
const authdetail = require('../auth/authdetail');
const userDataFetch = require('../controllers/userDataFetch');

router.post("/login",login);
router.post("/register",register);
router.get("/validator",autehnticate,validat);
router.get("/logout",autehnticate,logout);
router.post("/details",authdetail,details);
router.get("/userDataFetch",authdetail,userDataFetch);
module.exports = router;