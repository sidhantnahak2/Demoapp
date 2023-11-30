import React from "react";
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {

    return (
        <>
            <header className="header">


                <nav className="navbar">
                    <NavLink to="/">MyApp</NavLink>
                    <div>
                        <NavLink to="/home"> Home</NavLink>
                        <NavLink to="/about"> About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <Link  to="/services"> Services</Link>

                    </div>

                </nav>
            </header>
        </>

    )
}

export default Navbar