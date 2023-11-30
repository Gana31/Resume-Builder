const express = require('express');
require('dotenv').config();
const app = express();
const cors = require("cors");
const router = require("./routes/userRoutes.js")
const cookiParser = require("cookie-parser");

const port = process.env.PORT || 8000

app.use(express.json());
app.use(cookiParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use('/api/v1',router);


app.listen(port,()=>{
    console.log(`server start ar ${port}`)
})

const dbConection = require('./config/database');
dbConection();