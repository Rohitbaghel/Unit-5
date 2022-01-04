import { createContext,useState } from "react"

export const CreateAuthContext = createContext()
export const AuthContext = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState(123) 
    
    return <CreateAuthContext.Provider value={{auth,setAuth,token,setToken}}>
         { children}
     </CreateAuthContext.Provider>
      
 }
 