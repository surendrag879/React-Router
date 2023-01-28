import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header>
                <a href='Logo' >Logo</a>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Home</NavLink>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <NavLink className="nav-Link active" aria-current="page" to="/todoApp">TodoApp</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-Link active" aria-current="page" to="/todoAppRedux">TodoAppRedux</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-Link" to="/counter">Counter</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-Link" to="/contextApi">Context</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-Link" to="/useReducer">UseReducer</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-Link" to="/useMemo">useMemo</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-Link" to="/useCallback">useCallback</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-Link" to="/formData">formData</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-Link" to="/game">Game</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;