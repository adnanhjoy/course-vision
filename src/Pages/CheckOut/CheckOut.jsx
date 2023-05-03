import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <h1>{course.title}</h1>
        </div>
    );
};

export default CheckOut;