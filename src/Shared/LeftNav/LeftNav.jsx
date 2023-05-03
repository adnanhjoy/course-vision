import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://course-vision-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='w-3/5 mx-auto mt-10'>
            <h1 className='text-2xl mb-10'>Course Category</h1>
            {
                courses.map(course =>

                    <div key={course.id}>
                        <Link to={`/course/${course?.id}`} className='link link-hover'>{course?.name}</Link>
                    </div>
                )
            }
        </div>
    );
};

export default LeftNav;