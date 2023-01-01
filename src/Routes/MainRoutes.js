import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './Protected';
import ErrorPage from '../Pages/404Page/index';
import Navbar from '../_Components/Navbar';
import Home from '../Pages/Home/index';
import TodoIndex from '../Common/TodoApp/index';

const MainRoutes = createBrowserRouter[{
    path: '/',
    element: <Navbar />,
    children: [
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            )
        },
        {
            path: '*',
            element: <ErrorPage />
        }
    ]
}]

export default MainRoutes;