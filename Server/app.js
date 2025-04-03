const express = require("express");
const app= express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors= require("cors");
require("dotenv").config();
const path = require('path');
app.use(cors());
const AdminRoute = require("./Routes/AdminRoute");
const CustomerRoute = require("./Routes/CustomerRoute");


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
mongoose.connect(process.env.DB_STRING).then(()=>{
    console.log("DB IS CONNECTED SUCCESSFULLY!!!");
})


app.use("/admin", AdminRoute);
app.use("/customer", CustomerRoute);

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is Running on ${port} port`);
})