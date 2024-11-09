import React from 'react';
import './Home.css'
import HeadImg from '../../images/bank.png'
import Students from '../../images/students.png'
import Teachers from '../../images/teachers.png'
import ListCourses from '../../Components/ListCourses/ListCourses';
import Sell from '../../images/sell.png'

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className="header">
                    <div className="header-left">
                        <h1 className="header-title">Today is reader Tommorow is <span className='yellow-text'>LEADER!</span></h1>
                        <p className="header-desc">Empower your future learn anywhere, build everywhere for a bright career.</p>
                        <button className="button btn">Learn More</button>
                    </div>
                    <img className='header-img' src={HeadImg} alt="img" />
                </div>

                <div className="info-block">
                    <button className="info-btn">Platforma haqida</button>
                </div>

                <div className="knowledge">
                    <div className="knowledge-block">
                        <p className="knowledge-desc">Kurs yakunida sertifikat olish un ofisga borib imtihon topshirilishi haqida yozish kk shu yerga </p>
                        <h2 className="knowledge-title">IIFA - upgrade your knowladge</h2>
                    </div>
                    <div className="knowledge-block-box">
                        <img className='knowledge-img' src={Students} alt="img" />
                        <h3 className="students-title">Students</h3>
                        <p className="students-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac a, porttitor ac arcu morbi bibendum interdum non. Nisi etiam posuere orci lacus neque</p>
                    </div>
                    <div className="knowledge-block-box">
                        <img className='knowledge-img' src={Teachers} alt="img" />
                        <h3 className="students-title">Teachers</h3>
                        <p className="students-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac a, porttitor ac arcu morbi bibendum interdum non. Nisi etiam posuere orci lacus neque</p>
                    </div>
                </div>
                <ListCourses />
            </div>
            <div className='adven'>
                <div className="container">
                    <div className="adventages">
                        <div className="adventages-left">
                            <button className='adventages-btn'>Afzalliklari</button>
                            <h2 className="adventages-title">Bir vaqtning o’zida 2 ta kurs sotib oling va <span className="yellow-text">3 chisini bepulga</span> ega boling</h2>
                            <button className="button btn">Learn More</button>
                        </div>
                        <div className="adventages-right">
                            <img className='sell-img' src={Sell} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
