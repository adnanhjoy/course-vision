import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    return (
        <div>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={course?.img} alt='course' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course?.title}</h2>
                    <p>{course?.details}</p>
                    <div className="card-actions justify-between items-center">
                        <div className='flex items-center'>
                            <span className='text-warning'><FaStar /></span> <p className='m-0 ms-2'>{course?.rating}</p>
                        </div>
                        <Link to={`/course/${course?.id}/checkout`}>
                            <button className="btn btn-xs btn-primary">Enroll Now</button>
                        </Link>
                        <div className='flex items-center font-bold'>
                            $ <p className='m-0 ms-2'>{course?.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;