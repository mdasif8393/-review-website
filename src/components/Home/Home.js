import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Courses from '../Courses/Courses';
import WebsiteInfo from '../WebsiteInfo/WebsiteInfo';
import './Home.css'

const Home = () => {

    const history = useHistory();

    const showAllCourses = () => {
        history.push('/services')
    }

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./smallCourses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div >
            <WebsiteInfo></WebsiteInfo>

            <div className="courses-container">
            {
                courses.map(course => <Courses course={course} key={course.key}></Courses>)
            }
            </div>
            
            <div class="d-grid gap-2">
                <button onClick={showAllCourses} class="btn btn-secondary" type="button">Show all Courses</button>
            </div>
            
        </div>
    );
};

export default Home;