
import {useContext} from "react"
import { AuthContext, CreateAuthContext } from "../context/AuthContext";


export const Login = () => {
    const { auth, setAuth, token, setToken } = useContext(CreateAuthContext)
    const CheckLogin = () => {
        setAuth(auth === false ? true : false)
        if (auth === false) {
            
            setToken(1234567)
        } else {
            setToken(null)
        }
        
    } 


    return (
        <div>

            < button onClick={() => { CheckLogin(); }}> {auth ? 'Logout' : 'Login'}</button >
            <p>Token:{token === 1234567 ? '123467' :null}</p>
        </div>
      
    )
 }
 