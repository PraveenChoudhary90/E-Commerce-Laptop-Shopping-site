
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../css/search.css";
import BASE_URL from '../Config/Config';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Table from 'react-bootstrap/Table';

const SearchProduct = ()=>{
  
      const [name, setName]= useState("");
      const [brand , setBrand]= useState("");
      const [mydata, setMydata]= useState([]);



      const HandelSubmit = async(e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/customer/searchProduct`
        try {
            const response  =await axios.post(api, {name:name, brand:brand})
            console.log(response.data);
            setMydata(response.data);
            
        } catch (error) {
            toast.error(error.response.data.msg);
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
           <th>{key.system}</th>
           <th>{key.size}</th>
           <th>{key.ram}</th>
           <th>{key.harddisk}</th>
           <th style={{color:"red"}}>{key.price}</th>
         
           </tr>
     
    </>
  )

})



    return(
        <>
        <div id="search">
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Brand </Form.Label>
        <Form.Control type="text" name='brand' value={brand} onChange={(e)=>{setBrand(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Search Data
      </Button>
    </Form>
    </div>


         <Table striped bordered hover >
      <thead>
        <tr>
          <th>Cart Pic</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Brand</th>
          <th>Product Model</th>
          <th>System</th>
          <th>Screen Size</th>
          <th>Ram</th>
          <th>Harddisk</th>
          <th>Price</th>
        </tr>
      </thead>
        <tbody>
         {ans}
        </tbody>
        </Table>
            <ToastContainer/>

        </>
    )
}

export default SearchProduct;