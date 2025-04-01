const express = require ("express");
const route = express.Router();
const AdminController = require("../Controller/AdminController");


route.post("/adminLogin", AdminController.AdminLogin);









module.exports = route;