import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link className='Link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='Link' to="/counter">Counter</Link>
                </li>
                <li>
                    <Link className='Link' to="/todoapp">TodoApp</Link>
                </li>
                <li>
                    <Link className='Link' to="/useMemo">useMemo</Link>
                </li>
                <li>
                    <Link className='Link' to="/useCallback">useCallback</Link>
                </li>
                <li className='about'>
                    <Link className='Link' to="/logout">Logout</Link>
                </li>
            </ul>
        </>

    );
}

export default Navbar;