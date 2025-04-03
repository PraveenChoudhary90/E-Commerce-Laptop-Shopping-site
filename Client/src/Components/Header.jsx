
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import img1 from "../Images/logo1.png";
import "../css/header.css"
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from "../Config/Config";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { MyContext } from '../LoginContext';
const Header = ()=>{

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const [cusemail, setCusEmail] = useState("");
  const [cuspassword, setCusPassword] = useState("");

  


   const {logedIn, setLogedIn, uname, uemail, setUname, setUemail} = useContext(MyContext);









  const navigate = useNavigate();
  const Product= useSelector(state=>state.mycart.cart);
   const ProLength= Product.length;


    const handelSubmit = async(e)=>{
      e.preventDefault();
      const api = `${BASE_URL}/admin/adminLogin`;
      try {
        const response = await axios.post(api,{email:email, password:password})
        console.log(response.data);
        localStorage.setItem("adminname", response.data.Admin.name);
        toast.success(response.data.msg);
        alert(response.data.msg);
        navigate("/dashboard");
        setShow(false);
      } catch (error) {
        toast.error(error.response.data.msg);
        alert(error.response.data.msg);
        
      }
    }



    

    const CustomerSubmit = async(e)=>{
      e.preventDefault();

      const api = `${BASE_URL}/customer/CustomerLogin`;
      try {
        const response = await axios.post(api, {email:cusemail, password:cuspassword});
        console.log(response.data);
         localStorage.setItem("token", response.data.token);
        setShow1(false);
        setLogedIn(true)
        alert("you are login")
        navigate("/");
      } catch (error) {
        alert(error.response.data.msg);
        
      }


      
    }




    const logout=()=>{
   localStorage.clear();
   setUname("")
   setUemail("");
   setLogedIn(false);
   navigate("/");  
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
             <FaUser onClick={handleShow1} />
            <span style={{fontSize:"30px"}}> <MdLocalGroceryStore onClick={()=>{navigate("/cartdata")}} />
            {ProLength}
            </span>
             <FaCircleUser onClick={handleShow} />
             
         <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Customer Setting Board
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
         Welcome : {uname}
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
        Email : {uemail}
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={logout}>logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
          setPassword(e.target.value);
        }} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>



  {/* customer login */}
        <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
           <Form>
           
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  name="email" value={cusemail} onChange={(e)=>{
          setCusEmail(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password"  name="password" value={cuspassword} onChange={(e)=>{
          setCusPassword(e.target.value);
        }} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={CustomerSubmit}>
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>





      <ToastContainer />
        </>
    )
}

export default  Header;