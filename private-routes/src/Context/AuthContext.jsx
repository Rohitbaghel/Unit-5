
import {createContext,useState,} from 'react'

export const AuthContext=createContext()


export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState("")
    const [auth, setAuth] = useState('')
    return (
        <AuthContext.Provider value={{token,setToken,auth,setAuth}} >{children }</AuthContext.Provider>
    )
}
