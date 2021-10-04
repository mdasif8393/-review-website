import React from 'react';
import './CourseInfo.css'

const CourseInfo = (props) => {
    const {name, img, info} = props.course;
    return (
        <div>
            <div className="card card-decoration" >
                <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title text-center">{name}</h1>
                    <p className="card-text">{info}</p>
                </div>
                </div>
            </div>
    );
};

export default CourseInfo;