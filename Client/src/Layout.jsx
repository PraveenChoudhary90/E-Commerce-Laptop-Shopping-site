import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";
import "./css/topnav.css"
const Layout = ()=>{
    return(
        <>
        <div id="head">
          <Header/>
        <TopNav/>
        </div>
        
        <Outlet/>
        <Footer/>

        </>
    )
}

export default Layout;