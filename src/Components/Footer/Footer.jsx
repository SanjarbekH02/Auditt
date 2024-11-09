import React from 'react';
import './Footer.css'
import Logo from '../../images/Logo.png'
import Facebook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'
import Telegram from '../../images/telegram.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-block">
                    <div className="footer-top">
                        <div className="footer-left">
                            <a className='logo-img' href="#">
                                <img src={Logo} alt="Logo" />
                            </a>
                            <a href="tel:" className="footer-link">+1 (7635) 547-12-97</a>
                            <a href="mailto:iifa@edu.com" className="footer-link">iifa@edu.com</a>
                        </div>
                        <div className="footer-right">
                            <h4 className="footer-title">Resources</h4>
                            <a href="#" className="footer-link">Video lessons</a>
                            <a href="#" className="footer-link">Quiz</a>
                            <a href="#" className="footer-link">Certificate</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-in">© 2024  •  All Rights Reserved</p>
                        <div className="addres-block">
                            <a href="#" className="addres-link">
                                <img className='addres-img' src={Facebook} alt="facebook" />
                            </a>
                            <a href="#" className="addres-link">
                                <img className='addres-img' src={Instagram} alt="Instagram" />
                            </a>
                            <a href="#" className="addres-link">
                                <img className='addres-img' src={Telegram} alt="Telegram" />
                            </a>

                            <select >
                                <option value="uz">Uz</option>
                                <option value="ru">Ru</option>
                                <option value="en">En</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
