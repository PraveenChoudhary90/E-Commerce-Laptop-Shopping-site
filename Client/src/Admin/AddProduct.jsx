import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../Config/Config';
import { ToastContainer, toast } from "react-toastify";
import "../css/AddProduct.css";

const AddProduct=()=>{
     const [input, setInput] = useState({});
     const [images, setImages]=useState("");


     const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
    }

    const handleImage=(e)=>{
       // console.log(e.target.files);
        setImages(e.target.files);
        console.log(images);
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BASE_URL}/admin/addproduct`;
        const formData= new FormData();
        for (let key in input) {
            formData.append(key, input[key]);
          }
        
          for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
          }  
          
          try {
            const response = await axios.post(api, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(response.data.msg);
            //  alert("Product is Uploaded Successfully!!!");
          } catch (error) {
             console.log(error)
          }
    }


    return(
        <>
          <Form id='addproduct'>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Product name</Form.Label>
        <Form.Control type="text"  name="name" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"   name="description" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Model Name</Form.Label>
        <Form.Control type="text" name="model" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Brand</Form.Label>
        <Form.Select aria-label="Default select example" name="brand"
        onChange={handleInput}>
      <option>Select Brand </option>
      <option value="HP">HP</option>
      <option value="DELL">DELL</option>
      <option value="APPLE">APPLE</option>
      <option value="LENOVO">LENEVO</option>
    </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmaile">
        <Form.Label>Product Screen Size</Form.Label>
        <Form.Select aria-label="Default select example" name="size"
        onChange={handleInput}>
      <option>Select Screen Size </option>
      <option value="15.5 Inches">15.5 Inches</option>
      <option value="12.8 Inches">12.8 Inches</option>
      <option value="18.5 Inches">18.5 Inches</option>
      <option value="14 Inches">14 Inches</option>
    </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmailf">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name="price" onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailg">
        <Form.Label>Operating System</Form.Label>
        <Form.Control type="text" name="system" onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailg">
        <Form.Label> Product Ram</Form.Label>
        <Form.Control type="text" name="ram" onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailh">
        <Form.Label>Hard Disk</Form.Label>
        <Form.Control type="text" name="harddisk" onChange={handleInput}  />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmailm">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file"  multiple  onChange={handleImage}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
          <ToastContainer />
        </>
    )
}

export default AddProduct;