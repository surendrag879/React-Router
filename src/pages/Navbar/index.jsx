import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <ul>
                <li className='active'>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/todoapp">TodoApp</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className='about'>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </>

    );
}

export default Navbar;