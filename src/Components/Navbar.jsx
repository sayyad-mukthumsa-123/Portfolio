import React from 'react'
import "../Styles/Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-list">
                    <ul className='navbar-list-first-child'>
                        <li>Portfolio</li>
                    </ul>
                    <ul className='nav-items'>
                        <li>
                            <Link to="home" className='navbar-link'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" className='navbar-link'>
                            About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" className='navbar-link'>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" className='navbar-link'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" className='navbar-link'>
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
