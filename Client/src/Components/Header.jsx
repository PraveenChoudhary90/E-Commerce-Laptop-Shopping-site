
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


const Header = ()=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




    return(
        <>
        <div id="header">
            <div id="pic">
                <img src={img1} alt="" />
                <h3>Lappy Zone</h3>
            </div>
            <div id="icons">
             <FaSearch />
             <FaHeart />
             <FaUser />
             <MdLocalGroceryStore  />
             <FaCircleUser onClick={handleShow} />
            </div>
             
        </div>
        <Button variant="primary">
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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