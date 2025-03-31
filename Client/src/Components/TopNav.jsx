import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
const TopNav = ()=>{
    return(
        <>
          <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link}  to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="home">Home</Nav.Link>
            <Nav.Link  as={Link}  to="features">Features</Nav.Link>
            <Nav.Link  as={Link}   to="pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Container>
          <input type='text' placeholder='Search Product' style={{padding:"10px",fontSize:"20px" ,textAlign:"center", borderRadius:"30px", width:"300px", border:"1px solid black" }}/>
        </Container>
      </Navbar>
        </>
    )
}

export default TopNav;