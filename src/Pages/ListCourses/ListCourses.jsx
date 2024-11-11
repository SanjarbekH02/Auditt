import React, { useState } from 'react';
import './ListCourses.css';
import Audit from '../../images/img.png';

const coursesData = new Array(50).fill({
    img: Audit,
    price: "299 000 UZS",
    name: "Audit",
    author: "Azizov Aziz",
    lessons: "40 ta dars"
});

const ListCourses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 8;
    const totalPages = Math.ceil(coursesData.length / coursesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const currentCourses = coursesData.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );

    return (
        <div className='courses container'>
            <h3 className="courses-title">Courses</h3>
            <div className="courses-block">
                {currentCourses.map((course, index) => (
                    <div className="courses-card" key={index}>
                        <img className="course-img" src={course.img} alt="img" />
                        <div className="pricee">
                            <p className="price">{course.price}</p>
                        </div>
                        <h3 className="course-name">{course.name}</h3>
                        <p className="course-author">{course.author}</p>
                        <div className="card-bottom">
                            <p className="course-number">{course.lessons}</p>
                            <button className="button">Buy</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <span className="page-label">Page</span>
                <button
                    className="page-arrow-left"
                    onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                ></button>
                <div className="page-number">
                    {currentPage}
                </div>
                <button
                    className="page-arrow-right"
                    onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    disabled={currentPage === totalPages}></button>
                <select
                    className="page-select"
                    onChange={(e) => handlePageChange(Number(e.target.value))}>
                    <option selected disabled >{totalPages}</option>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
};

export default ListCourses;
