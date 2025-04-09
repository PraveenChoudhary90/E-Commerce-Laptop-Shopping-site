import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../Config/Config";
import Table from 'react-bootstrap/Table';
const CustomerOrder=()=>{
const [mydata, setMydata]= useState([]);
const loadData=async()=>{
       let api=`${BASE_URL}/admin/getcustomerorder`;
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
}, []);

const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td>{key.name}</td>
            <td>{key.totalamount}</td>
            <td>{key.customername}</td>
            <td>{key.address}</td>
            <td>{key.contact}</td>
            <td>{key.email}</td>
            <td>{key.dop}</td>
          </tr>
        </>
      )
});


    return(
        <>
         <h1> Customer Orders</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Products Name</th>
          <th>Total Amount</th>
          <th>Customer name</th>
          <th>Shipping Address</th>
          <th>Contact no</th>
          <th>Email</th>
          <th> Date of Purchasing </th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
     </Table>
        </>
    )
}
export default CustomerOrder;