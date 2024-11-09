import React from 'react';
import './Navbar.css'
import Logo from '../../images/Logo.png'

const Navbar = () => {
    return (
        <div className="container">
            <div className='navbar'>
                <a href="#" className="logo-link">
                    <img src={Logo} alt="logo image" />
                </a>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <a href="" className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="" className="nav-link">COURSES</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="" className="nav-link">CERTIFICATE</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="" className="nav-link">QUIZ</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="" className="nav-link">O'QITUVCHI BO'LISH</a>
                    </li>
                </ul>
                <button className="button">Login</button>
            </div>
        </div>
    );
}

export default Navbar;
