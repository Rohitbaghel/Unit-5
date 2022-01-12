import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
export const Dashboard = () => {
    const { token, setToken } = useContext(AuthContext)
    if (token === '') {
    return    <Navigate to='/login'/>
    }
    return (
        <div>
            this is Dashboard
        </div>
    )
}
