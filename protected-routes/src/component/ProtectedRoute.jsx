import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const isAuth = false;
    return(
        isAuth ? <Outlet/> : <Navigate to = "/Login"/>
    )
}

export default ProtectedRoute