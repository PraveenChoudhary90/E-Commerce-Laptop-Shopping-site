const CustomerModel = require("../Model/CustomerModel");
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");

const CustomerRegistraction = async(req,res)=>{
   const {name,address,city,contact,email,password} =req.body;
    const saltRounds = 10; // 10 rounds is the default
 const salt = await bcrypt.genSalt(saltRounds);
 const hashedPassword = await bcrypt.hash(password, salt);  
   try {
      const Customer= await CustomerModel.create({
     name:name,
    address:address, 
    city:city,
    contact:contact,
    email:email,
    password:hashedPassword
     })
        res.status(201).send({msg:"You are Succesfully Regtered!"});
   } catch (error) {
    console.log(error);
    
   }

}



const CustomerLogin = async(req,res)=>{
    const{ email, password} =req.body;
    try {
        const Customer= await CustomerModel.findOne({email:email});
         
        if(!Customer)
        {
            res.status(400).send({msg:"Invalid Email ID!"});
        }

        const passwordMatch = await bcrypt.compare(password, Customer.password);
     
        if(!passwordMatch)
        {
            res.status(400).send({msg:"Invalid Password!"});
        }
    
   const token=jwt.sign({id:Customer._id }, process.env.JWT_SECRET, { expiresIn: "5d" });
   res.status(200).send({token:token});
    } catch (error) {
        console.log(error);
    }
    

}




const custAuth=async(req, res)=>{
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
     try {
        const decodedToken = jwt.verify(token,  process.env.JWT_SECRET);
        console.log(decodedToken.id);
      const Customer = await CustomerModel.findById(decodedToken.id).select("-password");

      console.log(Customer);

      res.status(200).send(Customer);
     
    } catch (error) {
         console.log(error);
     }
}


const cusGetData = async(req,res)=>{
    const {userid}=req.query;
    try {
        const Customer = await CustomerModel.findById(userid);
        res.status(200).send(Customer);
    } catch (error) {
        console.log(error);
        
    }
   
}

    





module.exports = {
    CustomerRegistraction,
    CustomerLogin,
    custAuth,
    cusGetData

}