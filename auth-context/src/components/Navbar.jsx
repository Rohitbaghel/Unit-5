
// import {useContext} from "react"
// import { AuthContext ,CreateAuthContext} from "../context/AuthContext"
import {Login} from './Login'
export const Navbar = () => {
// const {auth,setAuth,token, setToken} = useContext(CreateAuthContext)
    //  console.log(auth)

    
    return (
         
         <div>
             <input type="text" placeholder="Enter Your name" /> 
            <input type="submit" value="Submit" />
            <Login/>
         </div>
     )
 }
 