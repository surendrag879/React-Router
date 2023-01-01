import React from 'react';
import MinimalLayout from '../_Components/Layout/MinimalLayout';
import Login from '../Pages/Login/index';

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <Login />,
        },
    ],
};

export default AuthenticationRoutes;
