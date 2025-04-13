const express= require ("express");
const route = express.Router();
const CustomerController = require("../Controller/CustomerController");


route.post("/registration", CustomerController.CustomerRegistraction);
route.post("/CustomerLogin", CustomerController.CustomerLogin);
route.get("/userauthenticate", CustomerController.custAuth);
route.get("/getdata", CustomerController.cusGetData);
route.post("/searchProduct", CustomerController.SearchProductData);








module.exports = route;