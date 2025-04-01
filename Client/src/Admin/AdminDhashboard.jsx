import Button from 'react-bootstrap/Button';
import "../css/dashboard.css"
import { useNavigate } from 'react-router-dom';
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
        <h1>Welcome to Admin Dashboard</h1>
        </div>
        <div id="data1">
          Welcome :{localStorage.getItem("adminname")} 
        </div>
        <div id="data2">
             <Button variant="primary" onClick={logout}>Logout</Button>
        </div>

        </>
    )
}

export default Dashboard;