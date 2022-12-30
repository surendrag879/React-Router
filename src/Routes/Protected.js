import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../Services/authSlice'
import { getLocalData } from '../Helpers/storage';


const ProtectedRoute = ({ children }) => {

    const user = getLocalData('user');
    const auth = useSelector(selectAuth);
    const location = useLocation();

    if (!auth.isLoggedIn || !user?.token) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute