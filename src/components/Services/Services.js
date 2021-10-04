import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';
import './Services.css'

const Services = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
        .then(res => res.json())
        .then((data) =>setAllCourses(data))
    },[])
    console.log(allCourses);
    return (
        <div>
            <div className="allCourses-container">
                {
                    allCourses.map(course =>  <AllCourses course={course} key={course.key}> </AllCourses>)
                }   
            </div>
        </div>
    );
};

export default Services;