
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../css/search.css";
import BASE_URL from '../Config/Config';
import axios from 'axios';
const SearchProduct = ()=>{
  
      const [name, setName]= useState("");
      const [brand , setBrand]= useState("");



      const HandelSubmit = async(e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/customer/searchProduct`
        try {
            const response  =await axios.post(api, {name:name, brand:brand})
            console.log(response.data);
            alert("serch data")
        } catch (error) {
            console.log(error);
        }

      }




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
        </>
    )
}

export default SearchProduct;