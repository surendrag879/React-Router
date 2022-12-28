import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul>
        <li className="active">
          <Link className="underLine" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="underLine" to="/counter">
            Counter
          </Link>
        </li>
        <li>
          <Link className="underLine" to="/todoapp">
            TodoApp
          </Link>
        </li>
        <li>
          <Link className="underLine" to="/contact">
            Contact
          </Link>
        </li>
        <li className="about">
          <Link className="underLine" to="/logout">
            Logout
          </Link>
        </li>
        <li className="about">
          <Link className="underLine" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
