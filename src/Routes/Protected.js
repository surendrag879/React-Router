import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const logedIn = false;

const Protected = () => {
    return logedIn ? <Outlet /> : <Navigate to={'/login'} />
}

export default Protected