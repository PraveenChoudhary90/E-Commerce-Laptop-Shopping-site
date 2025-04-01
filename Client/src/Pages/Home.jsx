import Carousel from "react-bootstrap/Carousel";
import img1 from "../Images/photo7.jpg";
import img2 from "../Images/photo8.png";
import img3 from "../Images/photo2.jpg";
import img4 from "../Images/Phono.png";
import "../css/home.css";

const Home = () => {
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
