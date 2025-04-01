const express = require("express");
const app= express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors= require("cors");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Succefully Connected!!!");
})
require("dotenv").config();
const AdminRoute = require("./Routes/AdminRoute");



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
mongoose.connect(process.env.DB_STRING).then(()=>{
    console.log("DB IS CONNECTED SUCCESSFULLY!!!");
})


app.use("/admin", AdminRoute);

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is Running on ${port} port`);
})