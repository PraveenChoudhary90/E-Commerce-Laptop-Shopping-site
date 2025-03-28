import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";


const Layout = ()=>{
    return(
        <>
        <Header/>
        <TopNav/>
        <Outlet/>
        <Footer/>

        </>
    )
}

export default Layout;