import Carousel from "react-bootstrap/Carousel";
import img1 from "../Images/photo7.jpg";
import img2 from "../Images/photo8.png";
import img3 from "../Images/photo2.jpg";
import img4 from "../Images/Phono.png";
import "../css/home.css";
import { useEffect, useState } from "react";
import BASE_URL from "../Config/Config";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Home = () => {

  const [mydata, setMydata] = useState([]);

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


const ans = mydata.map((key)=>{
  return(
    <>
     <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={`${BASE_URL}/${key.defaultImage}`} height="300"  />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
           <h6>{key.description}</h6>
           <h6>Brand : {key.brand}</h6>
           <h6>Model{key.model}</h6>
           <h6>Size:{key.size}</h6>
           <h6>Model:{key.model}</h6>
           <h6>System:{key.system}</h6>
           <h6>Ram:{key.ram}</h6>
           <h6>Harddisk:{key.harddisk}</h6>
           <h6> Price : {key.price}</h6>
        </Card.Text>
        <Button variant="primary" style={{marginLeft:"50px"}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </>
  )

})

  return (
    <>
      <div id="slider">
        <Carousel>
          <Carousel.Item>
            <img src={img1} alt="" />
            <Carousel.Caption>
              <h3>First slide demo</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="" />
            <Carousel.Caption>
              <h3>Second slide demo</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="" />
            <Carousel.Caption>
              <h3>Third slide demo</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <div id="cards">
      {ans}
    </div>



       <div id="video">
    <video src="video.mp4" type="video/mp4" autoplay muted  controls loop ></video>
    {/* <video autoplay muted controls loop >
  <source src="video.mp4" type="video/mp4"/>
</video> */}
    </div>

    
    

    <div id="phono">
      <img src={img4} alt="" />
      <h1>Online Laptop Store and Laptop Shop Zone Theme</h1>
        <button>View Demo</button>
      {/* <button>Purchase Theme</button> */}
      
    </div>

      
    </>
  );
};

export default Home;
