const AdminModel = require("../Model/AdminModel");
const OrderModel = require("../Model/OrderModel");
const ProductModel = require("../Model/ProductModel")





const AdminLogin = async(req,res)=>{
   const {email, password} = req.body;
   try {
    const Admin = await AdminModel.findOne({email:email});
           if (!Admin)
        {
            res.status(404).send({msg:"Invalid Admin EmailID!"});
        }
        if (Admin.password!=password)
        {
            res.status(404).send({msg:"Invalid Password!"});
        }
        res.status(200).send({msg:"You are Succesfully Login", Admin:Admin});
    } catch (error) {
        console.log(error);
    }
}


const Addproduct = async(req,res)=>{
    const imageUrls=req.files.map(file=>file.path);
    const {name,description,model,brand,size,price,system,ram,harddisk}=req.body;
    try {
    const Product = await ProductModel.create({
    name:name,
    description:description, 
    brand:brand,
    model:model,
    size:size,
    price:price,
    system:system,
    ram:ram,
    harddisk:harddisk,
    defaultImage:imageUrls[0],
    images:imageUrls
      })
      res.status(200).send({msg:"Product Succesfully save!!!"});

    } catch (error) {
        console.log(error);
        
    }
   
    
}

const ShowProduct = async(req,res)=>{
    const Product = await ProductModel.find();
    res.status(200).send(Product);
}


const GetCustomerOrder=async(req, res)=>{
    const Order= await OrderModel.find();
    res.status(200).send(Order);
}


const DeleteDataProduct = async(req,res)=>{
    const { id} = req.body;
    try {
        const Data = await ProductModel.findByIdAndDelete(id);
    res.send({msg:"Product is Delete succefully"});  
    } catch (error) {
        console.log(error);
        
    }
  
}


const ShowFromData = async(req,res)=>{
    const { _id }=req.body;
    try {
        const Data =await ProductModel.findById(_id);
        res.status(200).send(Data);
    } catch (error) {
        console.log(error);
    }
}


const UpdataData = async(req,res)=>{
    const {_id}=req.body;
    try {
        const Data = await ProductModel.findByIdAndUpdate(_id, req.body);
        res.status(200).send({msg:"Your Product Data is Update successfully"});
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    AdminLogin,
    Addproduct,
    ShowProduct,
    GetCustomerOrder,
    DeleteDataProduct,
    ShowFromData,
    UpdataData
}