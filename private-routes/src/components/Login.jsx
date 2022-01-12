import React, { useState } from 'react'

export const Login = () => {
    const [user, setUser] = useState({})
    const handleChange = ({target:{name,value}}) => {
setUser({...user,[name]:value})
    }
    // const getData = ({
        
    // })
    return (
        <div>
            <h1>Login page</h1>
            <form action="">
                <input type="text" placeholder="Enter your email " onChange={handleChange} name="email" /><br />
                <input type="password" placeholder="Enter your password" onChange={handleChange} name="password" />
                
            </form>
            <button >submit</button>
        </div>
    )
}
