import React from 'react';
import Home from '../pages/Home/index';
import Contact from '../pages/Contact/index';
import Login from '../pages/Login/index';
import ProtectedRoute from './ProtectedRoute';
import Navbar from '../pages/Navbar/index';
const MainRoutes = {
    path: '/',
    element: <Navbar />,
    children: [
        {
            path: '/home',
            element: (
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            ),
        },
        {
            path: '/contact',
            element: (
                <ProtectedRoute>
                    <Contact />
                </ProtectedRoute>
            ),
        },
        {
            path: '*',
            element: "<NoMatch />",
        },
    ],
};

export default MainRoutes;