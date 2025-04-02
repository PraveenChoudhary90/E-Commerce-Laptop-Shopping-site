const mongoose= require("mongoose");
const productSchema= new mongoose.Schema({
    name:String,
    description:String, 
    brand:String,
    model:String,
    size:String,
    price:Number,
    system:String,
    ram:String,
    harddisk:String,
    defaultImage:String,
    images:[String]


})

module.exports = mongoose.model("product", productSchema);