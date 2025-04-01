
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Registration from "./Pages/Registration"
import Dashboard from "./Admin/AdminDhashboard"

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="registration" element={<Registration/>}/>
      </Route>
     </Routes>
     <Routes>
      <Route path="dashboard" element={<Dashboard/>}>
      
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
