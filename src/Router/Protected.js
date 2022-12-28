import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Protected = ({ Component }) => {
    const navigate = useNavigate();
    console.log(Component)

    useEffect(() => {
        let login = localStorage.getItem('user');
        if (!login) {
            navigate('login');
        }
    })
    return (
        <>
            {Component}
        </>
    )
}

export default Protected