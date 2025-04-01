const AdminModel = require("../Model/AdminModel");






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





module.exports = {
    AdminLogin
}