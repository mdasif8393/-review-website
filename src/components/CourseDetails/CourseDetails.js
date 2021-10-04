import React, { useEffect, useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import './CourseDetails.css'
const CourseDetails = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./coursesInfo.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))

    },[])
    
    return (
        

        <div className="courses-info text-center">
            {
                courses.map(course => <CourseInfo key={course.key} course={course}> </CourseInfo>)
            }
        </div>
    );
};

export default CourseDetails;