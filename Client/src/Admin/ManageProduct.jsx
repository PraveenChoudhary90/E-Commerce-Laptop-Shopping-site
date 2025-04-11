import { useEffect, useState } from "react";
import "../css/manageProduct.css";
import Table from 'react-bootstrap/Table';
import BASE_URL from "../Config/Config";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from "react-toastify";



const ManageProduct = ()=>{
      const [mydata, setMydata] = useState([]);
      const [input, setInput] = useState({});
      const [images,setImages]=useState("");
      

       const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Handelupdate = (_id)=>{
        handleShow(true);
        console.log(_id);
  }

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
        toast.success(response.data.msg);
    } catch (error) {
        console.log(error);
    }
}

const handleInput = (e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);

}
console.log(input);
const handleImage = (e)=>{
  const files = e.target.files;
  setImages(files);
  console.log(images);

}

const handleupdateSubmit =async (e)=>{
  e.preventDefault();
  const api = `${BASE_URL}/admin/UpdateData`;
  try {
    const response =await axios.post(api, input, images);
    toast.success(response.data.msg);
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
           <th style={{fontSize:"25px"}} onClick={()=>{Handelupdate(key._id)}}><FaPen /></th>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmaila">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text"  name="name" value={input.name} onChange={handleInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmailb">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"   name="description" value={input.description} onChange={handleInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmailc">
                    <Form.Label>Model Name</Form.Label>
                    <Form.Control type="text" name="model" value={input.model} onChange={handleInput}  />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmaild">
                    <Form.Label>Brand</Form.Label>
                    <Form.Select aria-label="Default select example" name="brand" value={input.brand}
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
                    <Form.Select aria-label="Default select example" name="size" value={input.size}
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
                    <Form.Control type="text" name="price" value={input.price} onChange={handleInput}  />
                  </Form.Group>
            
                  <Form.Group className="mb-3" controlId="formBasicEmailg">
                    <Form.Label>Operating System</Form.Label>
                    <Form.Control type="text" name="system" value={input.system} onChange={handleInput}  />
                  </Form.Group>
            
                  <Form.Group className="mb-3" controlId="formBasicEmailg">
                    <Form.Label> Product Ram</Form.Label>
                    <Form.Control type="text" name="ram" value={input.ram} onChange={handleInput}  />
                  </Form.Group>
            
                  <Form.Group className="mb-3" controlId="formBasicEmailh">
                    <Form.Label>Hard Disk</Form.Label>
                    <Form.Control type="text" name="harddisk" value={input.harddisk} onChange={handleInput}  />
                  </Form.Group>
                 
                  <Form.Group className="mb-3" controlId="formBasicEmailm">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file"  multiple  onChange={handleImage}  />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleupdateSubmit}>
                    Update Data
                  </Button>
                </Form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
        </>
    )
}

export default ManageProduct;