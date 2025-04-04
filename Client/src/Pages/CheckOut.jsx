import { useEffect, useContext, useState } from "react";
import { MyContext } from "../LoginContext";
import Table from 'react-bootstrap/Table';
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BASE_URL from '../Config/Config';
import "../css/CartData.css";
import axios from "axios";
import "../css/checkout.css";

const CheckOut=()=>{
const {logedIn} = useContext(MyContext);
const [cusData, setCusData] = useState({});
const navigate= useNavigate();
    const Product= useSelector(state=>state.mycart.cart);
    console.log(Product);
    const dispatch= useDispatch();
    let totalAmount=0;
    const ans=Product.map((key)=>{
        totalAmount+=key.price * key.qnty;
        return(
            <>
               <tr>
               <td>
                <img src={`${BASE_URL}/${key.defaultImage}`} width="80" height="60" /> 
                </td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.model}</td>
                <td>{key.harddisk}</td>
                <td>{key.price}</td>
                <td>
                    {key.qnty}
                </td>
                <td>{key.price * key.qnty}</td>
               </tr>
            </>
        )
    })


const loadData=async()=>{
  let api=`${BASE_URL}/customer/getdata?userid=${localStorage.getItem("userid")}`;

  try {
       const response = await axios.get(api);
       console.log(response.data);
       setCusData(response.data);
  } catch (error) {
     console.log(error);
  }

}




useEffect(()=>{
  if (!localStorage.getItem("userLogedin"))
  {
     navigate("/");
  }
  loadData();
}, []);


    return(
        <>
          <h1 align="center"> Your Checkout Page </h1>
           <div id="cartone">
        
          <Table striped bordered hover id="table">
      <thead>
        <tr>
          <th>Cart Pic</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Product Model</th>
          <th>Harddisk</th>
          <th>Price</th>
          <th>Quantity</th>
          <th> Total </th>
        </tr>
      </thead>
        <tbody>
         {ans}
        </tbody>
        </Table>
        </div>

         <h4 align="center" style={{color:"green", fontWeight:"bold"}}>
          Your Total  Paybale Amount 
        < HiDocumentCurrencyRupee /> : {totalAmount}</h4>

         <div id="cusdata">
          <h4>::Your All Information::</h4>
          Customer Name : {cusData.name}
          <br/>
          Shipping Address : {cusData.address}
          <br/>
          Contact no :  {cusData.contact}
          <br />
          Email :  {cusData.email}
          <br/>
          <br/>
           <Button > Pay Now!</Button>
           </div>

          
        </>
    )
}

export default CheckOut;