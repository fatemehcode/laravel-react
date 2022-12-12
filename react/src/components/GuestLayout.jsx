import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
    return (
        <div>
            for guests users
            <Outlet/>
        </div>
    );
};

export default GuestLayout;