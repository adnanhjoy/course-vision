import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourse from '../AllCourse/AllCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='flex gap-5 mt-20 justify-center'>
            {
                courses.map(course => 
                <AllCourse
                    key={course.id}
                    course={course}
                ></AllCourse>)
            }
        </div>
    );
};

export default Courses;