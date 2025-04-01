import "../css/footer.css";
import img1 from "../Images/footer1.png";
import img2 from "../Images/footer2.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import img3 from "../Images/Bitpay.png";
import img4 from "../Images/Discover.png";
import img5 from "../Images/Mastercard.png";
import img6 from "../Images/Stripe.png";
import img7 from "../Images/Visa.png";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footer1">
          <div id="para">
            <p>
              A laptop is a portable personal computer designed for mobile use,
              with a clamshell form factor that typically includes a screen,
              keyboard, and trackpad or pointing device. Laptops are equipped
              with battery power, making them ideal for use while traveling or
              in places where a desktop computer cannot be used. They are
              smaller, lighter.
            </p>
          </div>
          <div id="para2">
            <div id="para3">
              <img src={img1} alt="" />
              <div id="para4">
                <h1>Free Delivery</h1>
                <h5>24/7 service</h5>
              </div>
            </div>
            <div id="para3">
              <img src={img2} alt="" />
              <div id="para4">
                <h1>Easy Returns </h1>
                <h5>Within 30 Days</h5>
              </div>
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
        <div id="footer2">
          <h1>Useful Links</h1>
          <h1>________</h1>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Shop</h1>
          <h1>News&Article</h1>
        </div>
        <div id="footer2">
          <h1>Contact</h1>
          <h1>________</h1>
          <h1>
            <FaMapMarkerAlt />
            Plaza X,XY Floor, XYZ Street,XYZ
          </h1>
           <h1>
            <IoCall />
            Calling Service
          </h1>
          <h1>
            <CgMail />
            Yourname@gmail.com
          </h1>
        
          {/* <h1>
            <RiCustomerService2Fill />
            Customer Service{" "}
          </h1> */}
        </div>
      </div>
      <div id="footdata">
        <h6>Copyright © 2025 Phono Lappy Zone By Evonicmedia. All Rights Reserved.</h6>
        <h4>_____________________________</h4>
        <h6>Payment Accepted</h6>
        <div id="upi">
          <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        </div>
       
        
      </div>
    </>
  );
};
export default Footer;
