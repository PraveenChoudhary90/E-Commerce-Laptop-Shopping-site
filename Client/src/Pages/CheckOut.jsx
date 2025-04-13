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
import { cartEmpty } from "../cartSlice";


const CheckOut=()=>{
const {logedIn} = useContext(MyContext);
const [cusData, setCusData] = useState({});
const navigate= useNavigate();
    const Product= useSelector(state=>state.mycart.cart);
    console.log(Product);
    const dispatch= useDispatch();
    let totalAmount=0;
    let productsName="";
    let imgURL="";



    const ans=Product.map((key)=>{
        totalAmount+=key.price * key.qnty;
         productsName+=key.name + ", ";
        imgURL=`${BASE_URL}/${key.defaultImage}`;
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




const [shoe,setShoe] = useState({
  name: "Training Shoes",
  creator: "Nike",
  img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  price: 500,
});





useEffect(()=>{
  if (!localStorage.getItem("userLogedin"))
  {
     navigate("/");
  }
  loadData();
}, []);







 const initPay = (data) => {
      const options = {
        key : "rzp_test_oWLUkrVaoJLWU0",
//         KEY_ID=rzp_test_oWLUkrVaoJLWU0
// KEY_SECRET=IS47GEvXCWrpf7RMY02kIlXK
        amount: data.amount,
        currency: data.currency,
        name: productsName,
        description: "Test",
        image:imgURL,
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyURL = "https://e-commerce-laptop-shopping-site.onrender.com/api/payment/verify";
            const {data} = await axios.post(verifyURL,response);
          } catch(error) {
            console.log(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
    



    const handlePay = async () => {
      try {
        const orderURL = "https://e-commerce-laptop-shopping-site.onrender.com/api/payment/orders";
        const {data} = await axios.post(orderURL,{amount: totalAmount, customername:cusData.name, address:cusData.address, contact:cusData.contact, email:cusData.email, proname:productsName});
        console.log(data);
        initPay(data.data);

        dispatch(cartEmpty());
        navigate("/");


      } catch (error) {
        console.log(error);
      }
    };
    
    


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
           <Button onClick={handlePay} > Pay Now!</Button>
           </div>

          
        </>
    )
}

export default CheckOut;