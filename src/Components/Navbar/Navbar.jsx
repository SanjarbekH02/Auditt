import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import './Navbar.css'
import Logo from '../../images/Logo.png'
import { NavLink } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCitizen, setIsCitizen] = useState(null);
    const [phone, setPhone] = useState('');

    const handleCitizenChange = (event) => {
        setIsCitizen(event.target.value);
    };
    const closeHandle = () => {
        setIsModalOpen(x=>!x)
    }
    return (
        <div className="container">
            <div className='navbar'>
                <a href="#" className="logo-link">
                    <img src={Logo} alt="logo image" />
                </a>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')} >ABOUT</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/courses' className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')}>COURSES</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/certificate' className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')}>CERTIFICATE</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/quiz' className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')}>QUIZ</NavLink>
                    </li>
                </ul>
                <button onClick={closeHandle} className="button">Login</button>
            </div>

            {
                isModalOpen && (
                    <div className="modalLogin">
                        <div className="modalLogin-content">
                            <div className="modalLogin-title">
                                <h1 className="login-title">Login</h1>
                                <div onClick={closeHandle} className="close"></div>
                            </div>
                            <form>
                                <p className="text-check">Are you citizen of Uzbekistan?</p>
                                <div className="radio-block">
                                    <label className='label'>

                                        <input required className='check-input' checked={isCitizen === 'yes'}
                                            onChange={handleCitizenChange} type="radio" value={"yes"} />
                                        <div className="radio">
                                            <p className="radio-center"></p>
                                        </div>Yes
                                    </label>
                                    <label className='label'>
                                        <input required className='check-input' checked={isCitizen === 'no'}
                                            onChange={handleCitizenChange} type="radio" value={"no"} />
                                        <div className="radio">
                                            <p className="radio-center"></p>
                                        </div>No
                                    </label>
                                </div>
                                <input required className='modalLogin-input' placeholder='Name' type="text" />
                                <input required className='modalLogin-input input' placeholder='Email' type="email" />
                                <PhoneInput
                                    country={'us'}
                                    value={phone} h
                                    onChange={(phone) => setPhone(phone)}
                                    inputStyle={{
                                        width: '100%',
                                        height: '40px',
                                        backgroundColor: '#f5f7fa',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        paddingLeft: '60px',
                                        fontSize: '16px',
                                    }}
                                    buttonStyle={{
                                        border: 'none',
                                        borderRadius: '8px 0 0 8px',
                                        padding: '0 10px',
                                    }}
                                    dropdownStyle={{
                                        borderRadius: '8px',
                                        padding: 0,
                                    }}
                                />
                                <div className="submit-block">
                                    <button onClick={closeHandle} type='click' className="cancel">Cancel</button>
                                    <button type='submit' className="submit btn">Confirm</button>
                                </div>
                                <button className='oneId'>OneId orqali kirish</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Navbar;
