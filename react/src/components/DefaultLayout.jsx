import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const DefaultLayout = () => {
    const{user,token}=useStateContext();
    if(!token){ return <Navigate to="/login"/>}
    return (
    <div>
        Default users
        <Outlet/> 
    </div>
    );
};

export default DefaultLayout;