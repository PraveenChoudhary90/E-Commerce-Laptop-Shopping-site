const express= require ("express");
const route = express.Router();
const CustomerController = require("../Controller/CustomerController");


route.post("/registration", CustomerController.CustomerRegistraction);
route.post("/CustomerLogin", CustomerController.CustomerLogin);
route.get("/userauthenticate", CustomerController.custAuth);








module.exports = route;