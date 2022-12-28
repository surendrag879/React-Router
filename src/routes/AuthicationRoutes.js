import React from 'react';
import { Outlet } from 'react-router-dom';
// import MinimalLayout from 'src/layout/MinimalLayout/index';
import Login from '../pages/Login/index';

const AuthenticationRoutes = {
    path: '/',
    element: <Outlet />,
    children: [
        {
            path: '/login',
            element: <Login />,
        },
    ],
};

export default AuthenticationRoutes;