import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link className='Link' to="/home">Home</Link>
                </li>
                <li>
                    <Link className='Link' to="/about">About</Link>
                </li>
                <li>
                    <Link className='Link' to="/service">Service</Link>
                </li>
                <li>
                    <Link className='Link' to="/contact">Contact</Link>
                </li> 

                <li>
                    <Link className='Link' to="/useMemo">useMemo</Link>
                </li>
                <li>
                    <Link className='Link' to="/useCallback">useCallback</Link>
                </li>
                <li>
                    <Link className='Link' to="/counter">Counter</Link>
                </li>

                <li className='about'>
                    <Link className='Link' to="/login">Login</Link>
                </li>
                <li className='about'>
                    <Link className='Link' to="/signup">Sign up</Link>
                </li>
            </ul>
        </>

    );
}

export default Navbar;