import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Course.css'

const Course = () => {
    const {key} = useParams();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/coursesInfo.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const data = courses.filter(course => course.key === key);


    return (
        <div className="text-center single-course-info">

            <div className="card bg-dark text-white">
                
                <img src={data[0]?.img} class="card-img" alt="..."/>
                
                <div className="card-img-overlay">
                    <h1 className="card-title text-danger">{data[0]?.name}</h1>
                    <p className="card-text text-danger">{data[0]?.info}</p>
                
                </div>
            </div>
        </div>
    );
};

export default Course;