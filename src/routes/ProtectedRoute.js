import React from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { getLocalData } from "../helper/storage";
import { useSelector } from "react-redux";
import { selectAuth } from '../services/auth';

const ProtectedRoute = ({ children }) => {
    const user = getLocalData("user");
    const location = useLocation();
    const auth = useSelector(selectAuth);
    console.log("auth",auth);
    if (!auth.isLoggedIn || !user?.userName) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
