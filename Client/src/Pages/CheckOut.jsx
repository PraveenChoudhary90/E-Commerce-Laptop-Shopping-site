import { useEffect, useContext } from "react";
import { MyContext } from "../LoginContext";
import { useNavigate } from "react-router-dom";
const CheckOut=()=>{
const {logedIn} = useContext(MyContext);
const navigate= useNavigate();
useEffect(()=>{
  if (!logedIn)
  {
     navigate("/");
  }
}, []);



    return(
        <>
          <h1 align="center"> Your Checkout Page </h1>
          
        </>
    )
}

export default CheckOut;