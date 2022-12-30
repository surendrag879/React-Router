import React from 'react'
import ProtectedRoute from './Protected';
import ErrorPage from '../Pages/404Page/index';
import Navbar from '../_Components/Navbar';
import Login from '../Pages/Login';
const MainRoutes = {
    path: "/",
    eleemnt: <Login />,
    children: [
        {
            path: "/",
            eleemnt: (
                <ProtectedRoute>
                    <Navbar />
                </ProtectedRoute>
            )
        },
        {
            path: "*",
            eleemnt: <ErrorPage />
        }
    ]
}

export default MainRoutes