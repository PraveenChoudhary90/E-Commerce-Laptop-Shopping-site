
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import img1 from "../Images/logo1.png";
import "../css/header.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from "../Config/Config";
import axios from "axios";
const Header = ()=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    const handelSubmit = async(e)=>{
      e.preventDefault();
      const api = `${BASE_URL}/admin/adminLogin`;
      try {
        const response = await axios.post(api,{email:email, password:password})
        console.log(response.data);
        alert("your are Login")
        localStorage.setItem("adminname", response.data.name);
        localStorage.setItem("adminemail", response.data.email);
        localStorage.setItem("adminid", response.data.id);
        Navigate("/dashboard");
      } catch (error) {
        console.log(error);
        
      }
    }



    return(
        <>
        <div id="header">
            <div id="pic">
                <img src={img1} alt="" />
                <h3>LappyZone</h3>
            </div>
            <div id="icons">
             <FaSearch />
             <FaHeart />
             <FaUser />
             <MdLocalGroceryStore  />
             <FaCircleUser onClick={handleShow} />
            </div>
             
        </div>
        {/* <Button variant="primary">
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email Address</Form.Label>
        <Form.Control type="text" placeholder="Enter email address" name="email" value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{
          setPassword(e.target.password);
        }} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default  Header;