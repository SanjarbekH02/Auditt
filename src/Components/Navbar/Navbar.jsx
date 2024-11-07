import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar container'>
            <a href="#" className="logo-link">Logo
                <img src="" alt="" />
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
    );
}

export default Navbar;
