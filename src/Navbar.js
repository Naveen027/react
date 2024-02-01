import * as React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navigation() {
    return (
        <>
        <nav className="container-fluid">
            <ul>
              <li><Link to="">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
        </nav>
        </>
    );
}

export default Navigation;