import React from 'react';
import { Link } from 'react-router-dom';
import './AllCourses.css'

const AllCourses = (props) => {
    const {img, instructor, name, price, rating, key} = props.course;
    return (
        //courses info page
        <div>
            
            <div className="all-course-decoration text-center mt-5">
                
                <img className="img-fluid" src={img} alt="" />
                <h1>{name}</h1>
                <p>Instructor: {instructor}</p>
                <p>Price: ${price}</p>
                <small>Rating: {rating}/5</small> <br /> <br />
                <Link to={`/course/${key}`}><button className="btn btn-secondary">See Course Info</button></Link>
            
            </div>
        </div>
    );
};

export default AllCourses;