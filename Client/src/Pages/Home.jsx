import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/photo4.jpg";
import img2 from "../Images/photo8.png";
import img3 from "../Images/photo6.jpg";
import "../css/home.css"

const Home = ()=> {
    return(
        <>
        <div id="slider">
            <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt=""   />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

        </>
    )
}

export default Home;