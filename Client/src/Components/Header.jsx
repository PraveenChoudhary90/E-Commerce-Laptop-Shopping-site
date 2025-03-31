
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import img1 from "../Images/logo1.png";
import "../css/header.css"

const Header = ()=>{
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
             <MdLocalGroceryStore />
             <FaCircleUser />
            </div>
        </div>
        </>
    )
}

export default  Header;