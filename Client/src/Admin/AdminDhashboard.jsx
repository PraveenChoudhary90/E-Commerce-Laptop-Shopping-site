import Button from 'react-bootstrap/Button';
import "../css/dashboard.css"
import { Outlet, useNavigate } from 'react-router-dom';
const Dashboard = ()=>{
  const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate("/");
        alert("Your are Logout SuccessFully");
        
    }
    return(
        <>
        <div id="admindashboard">
          <marquee behavior="scroll" direction="left">
        <h1>Welcome to Admin Dashboard</h1>
        </marquee>
        </div>
        <div id="data1">
          Welcome :{localStorage.getItem("adminname")} 
        </div>
        <div id="data2">
             <Button variant="primary" onClick={logout}>Logout</Button>
        </div>
        <div id="nav">
        <div id="navdata">
             <Button variant="primary" onClick={()=>{navigate("profile")}}>Admin Profile</Button>
             <Button variant="primary" onClick={()=>{navigate("addproduct")}}>Add Products</Button>
             <Button variant="primary" onClick={()=>{navigate("manageproduct")}}> Manage Product </Button>
             <Button variant="primary" onClick={()=>{navigate("customerorder")}}>Customer Order</Button>
             <Button variant="primary">Products</Button>
             <Button variant="primary">Seetings</Button>
             <Button variant="primary" onClick={logout}>Logout</Button>

        </div>
        <div id="navdata1">
          <Outlet/>
          {/* <h1>data</h1> */}
        </div>
        </div>

        </>
    )
}

export default Dashboard;