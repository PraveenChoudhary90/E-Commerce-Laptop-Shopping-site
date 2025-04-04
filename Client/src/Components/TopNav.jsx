import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import "../css/topnav.css";
const TopNav = ()=>{
    return(
        <>
        <div id="top">
          <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link}  to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="home">Home</Nav.Link>
            <Nav.Link  as={Link}  to="about">About Us</Nav.Link>
            <Nav.Link  as={Link}   to="Registration">Registration</Nav.Link>
          </Nav>
        </Container>
        <Container>
          <input type='text' placeholder='Search Product' id='input' />
        </Container>
      </Navbar>
      </div>
        </>
    )
}

export default TopNav;