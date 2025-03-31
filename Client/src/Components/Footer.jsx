import "../css/footer.css"
import img1 from "../Images/footer1.png"
import img2 from  "../Images/footer2.png"
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footer1">
          <div id="para">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            corporis adipisci harum unde, hic similique quasi quod repellat
            assumenda quae minus quos sint deserunt possimus culpa ipsa nihil
            doloremque! Quae? Autem quisquam optio, consequuntur beatae sunt
            impedit libero ducimus consectetur maxime inventore voluptatum, unde
            eos? Itaque sint incidunt adipisci fuga minus in, dolore quam
            consectetur nobis repellat magni rerum maxime!
            </p>
          </div>
          <div id="para2">
            <div id="para3">
                <img src={img1} alt="" />
                <h1>Free delivery</h1>
                <h3>24/7 service</h3>
            </div>
            <div id="para4">
                <img src={img2} alt="" />
                <h1>Easy returns</h1>
                <h5>Within 30 days</h5>
            </div>
          </div>
        </div>
        <div id="footer2">
            <h1>Support</h1>
            <h1>________</h1>
            <h1>Track Your Order</h1>
            <h1>Terms&Conditions</h1>
            <h1>Privacy Policy</h1>
            <h1>Help Centre</h1>
        </div>
        <div id="footer3">
             <h1>Useful Links</h1>
            <h1>________</h1>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Shop</h1>
            <h1>News&&Article</h1>
        </div>
        <div id="footer4">
              <h1>Contact</h1>
            <h1>________</h1>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Shop</h1>
            <h1>News&&Article</h1>
        </div>
      </div>
    </>
  );
};
export default Footer;
