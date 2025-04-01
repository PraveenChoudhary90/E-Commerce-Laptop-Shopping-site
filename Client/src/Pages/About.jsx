import img1 from "../Images/about1.jpg";
import img2 from "../Images/vision.jpg";
import img3 from "../Images/mission-2.jpg";
import "../css/about.css";
const About = () => {
  return (
    <>
      <div id="about">
        <img src={img1} alt="" style={{ borderRadius: "30px" }}/>
        <div id="aboutdata">
          <h1>Our History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Enim id diam velit purus.
            Sagittis in tristique scelerisque elit molestie. Eu arcu in mattis
            malesuada etiam rhoncus lacinia dolor. Et diam blandit rhoncus sit
            id mauris neque. Congue mauris nunc leo netus vitae iaculis nunc.
            Egestas quis facilisis sagittis sapien maecenas nullam sapien.
            Rhoncus lacinia dui lacus nibh ornare sit. Neque consectetur euismod
            <br></br>
            maecenas sit aliquet viverra. Ac lobortis. Lorem ipsum dolor sit
            amet consectetur. Tincidunt diam tincidunt euismod arcu pharetra
            velit lorem. Arcu ut interdum a eu. Sed auctor mauris felis mauris
            tincidunt integer. Convallis dolor lacinia est phasellus malesuada
            <br></br>
            sed. Scelerisque leo pulvinar egestas sed tellus quis urna risus
            tortor. Eu malesuada hac sed mattis tristique risus tristique nisi.
            Interdum augue.
          </p>
          <button>Start Shoping</button>
        </div>
      </div>

      <br></br>
      <br></br>

      <div id="about">
        <div id="aboutdata">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet enim arcu pellentesque
            convallis et consequat id at velit. At et non euismod euismod quam.
            Tincidunt varius elit eget laoreet in netus vel. Magnis vestibulum
            lacinia id aenean aliquam. Habitant pulvinar pretium porttitor
            lectus fermentum cursus adipiscing. Sit turpis vivamus euismod
            malesuada. Eget sem ut morbi eget aenean at sagittis.
          </p>
          <button>Get In Touch</button>
        </div>
        <img src={img2} alt="" style={{ borderRadius: "30px" }} />
      </div>

      <br></br>
      <br></br>

      <div id="about">
        <img src={img3} alt="" style={{ borderRadius: "30px" }} />
        <div id="aboutdata">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet enim arcu pellentesque
            convallis et consequat id at velit. At et non euismod euismod quam.
            Tincidunt varius elit eget laoreet in netus vel. Magnis vestibulum
            lacinia id aenean aliquam. Habitant pulvinar pretium porttitor
            lectus fermentum cursus adipiscing. Sit turpis vivamus euismod
            malesuada. Eget sem ut morbi eget aenean at sagittis.
          </p>
          <button>Get In Touch</button>
        </div>
      </div>
    </>
  );
};

export default About;
