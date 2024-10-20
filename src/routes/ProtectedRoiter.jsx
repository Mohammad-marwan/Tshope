import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

export  function ProtectedRoiter({children}) {
    const token = localStorage.getItem('userToken');
    if(!token){

        return <Navigate to='/Login' />;

    }
    return children;
}
export  function PublicRoiter({children}) {
    const token = localStorage.getItem('userToken');
    if(token){

        return <Navigate to='/' />;

    }
    return children;
}
