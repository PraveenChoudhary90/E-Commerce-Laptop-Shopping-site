
import img4 from "../Images/Phono.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import BASE_URL from "../Config/Config";
import "../css/ragistraction.css";
import { ToastContainer, toast } from "react-toastify";

const Registration = ()=>{

     const [input, setInput] = useState({});

  const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }

  const handleSubmit=async(e)=>{
      e.preventDefault();
      let api=`${BASE_URL}/customer/registration`;
      try {
          const response=await axios.post(api, input);
          toast.success(response.data.msg);
      } catch (error) {
         toast.error(error.response.data.msg);
      }
  }



    return(
        <>
        <div id="from1">
                 <h1 align="center"> User Registration</h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name </Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address </Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City </Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact </Form.Label>
        <Form.Control type="text" name="contact" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email </Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    <br /> <br/>
            <div id="phono">
              <img src={img4} alt="" />
              <h1>Online Laptop Store and Laptop Shop Zone Theme</h1>
                <button>View Demo</button>
              {/* <button>Purchase Theme</button> */}
              
            </div>
                  <ToastContainer />
        </>
    )
}
//mroKlYI3nyWyJ1wV
//mroKlYI3nyWyJ1wV
//mongodb+srv://pc852180:mroKlYI3nyWyJ1wV@cluster0.hlyaz6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
export default Registration;