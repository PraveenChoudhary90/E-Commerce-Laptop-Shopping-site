import Table from 'react-bootstrap/Table';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { qntyIncrease, qntyDecrease, productRemove } from "../cartSlice";
import { MdDelete } from "react-icons/md";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BASE_URL from '../Config/Config';
import "../css/CartData.css";

const CartData=()=>{
    const navigate = useNavigate();
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
                <td>{key.system}</td>
                <td>{key.ram}</td>
                <td>{key.size}</td>
                <td>{key.harddisk}</td>
                <td>{key.description}</td>
                <td>{key.price}</td>
                <td>
                <FaMinusSquare  style={{fontSize:"20px", marginRight:"5px"}}
                 onClick={()=>{dispatch(qntyDecrease({id:key.id}))}}/>
                    {key.qnty}
                  
                    <FaPlusSquare style={{fontSize:"20px", marginLeft:"5px"}}  
                    onClick={()=>{dispatch(qntyIncrease({id:key.id}))}}/>

                </td>
                <td>{key.price * key.qnty}</td>
                <td>
                    <a href="#" style={{fontSize:"25px", color:"red"}}
                    onClick={()=>{dispatch(productRemove({id:key.id}))}}>
                    <MdDelete/>
                    </a>
               
                </td>
               </tr>
            </>
        )
    })
 return(
        <>
        <div id="cartone">
          <h1 align="center"> My Cart </h1>
        <h4 align="center" style={{color:"green", fontWeight:"bold"}}>
        < HiDocumentCurrencyRupee /> : {totalAmount}</h4> 

        <h1 align="right">
        <Button variant="warning" onClick={()=>{navigate("/checkout")}}>CheckOut</Button>
            </h1>
          <Table striped bordered hover>
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
          <th> Total </th>
          <th></th>
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
export default CartData;

