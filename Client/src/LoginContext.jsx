import { createContext, useState } from "react";

const MyContext = createContext();

const LoginContext=({children})=>{
const [logedIn, setLogedIn]= useState(false);
const [uname, setUname]= useState("");
const [uemail, setUemail]=useState("");
    return(
        <>
        <MyContext.Provider value={{logedIn, setLogedIn, uname, setUname, uemail, setUemail}}>
            {children}
           </MyContext.Provider>
        </>
    )
}

export  {MyContext};
export default LoginContext;