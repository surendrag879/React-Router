import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/todoApp">TodoApp</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/#">other</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/#">Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;