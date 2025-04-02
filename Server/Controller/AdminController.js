const AdminModel = require("../Model/AdminModel");
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


module.exports = {
    AdminLogin,
    Addproduct
}