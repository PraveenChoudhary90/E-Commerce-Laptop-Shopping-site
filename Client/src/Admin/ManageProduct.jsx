import { useEffect, useState } from "react";
import "../css/manageProduct.css";
import Button from "react-bootstrap/esm/Button";
import Table from 'react-bootstrap/Table';
import BASE_URL from "../Config/Config";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const ManageProduct = ()=>{
      const [mydata, setMydata] = useState([]);

      const loadData = async()=>{
  const api = `${BASE_URL}/admin/showProduct`;
  try {
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
    
  } catch (error) {
    console.log(error);
  }
}


useEffect(()=>{
loadData();
},[])
    

const HandelDelete =async (id)=>{
    const api = `${BASE_URL}/admin/DeleteData`;
    try {
        const response = await axios.post(api,{id:id});
        alert(response.data.msg);
    } catch (error) {
        console.log(error);
    }
}



const ans = mydata.map((key)=>{
  return(
    <>
     <tr>
      <img src={`${BASE_URL}/${key.defaultImage}`} height="100" width="100"  />
      
            <th>{key.name}</th>
           <th>{key.description}</th>
           <th>{key.brand}</th>
           <th>{key.model}</th>
           <th>{key.size}</th>
           <th>{key.model}</th>
           <th>{key.system}</th>
           <th>{key.ram}</th>
           <th>{key.harddisk}</th>
           <th style={{color:"red"}}>{key.price}</th>
           <th style={{fontSize:"26px"}} onClick={()=>{HandelDelete(key._id)}}><MdDelete /></th>
           <th style={{fontSize:"25px"}}><FaPen /></th>
           </tr>
     
    </>
  )

})


    return(
        <>
        <div id="manag">
        <h1>Manage Your Product </h1>
     <Table striped bordered hover >
      <thead>
        <tr>
          <th>Cart Pic</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Product Model</th>
          <th>System</th>
          <th>Ram</th>
          <th>Screen Size</th>
          <th>Harddisk</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
        <tbody>
         {ans}
        </tbody>
        </Table>
        </div>
        </>
    )
}

export default ManageProduct;