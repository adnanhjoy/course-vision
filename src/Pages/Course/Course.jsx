import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div className='md:grid grid-cols-2 gap-5 justify-center mt-14 w-11/12 mx-auto'>
            {
                courses.map(course =>
                    <div key={course.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className=' h-40 w-full' src={course?.img} alt='course' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course?.title}</h2>
                            <p>{course?.details.slice(0, 100,) + "..."}<Link className='link link-hover font-bold' to={`/course/${course?.course_id}/course-detail/${course.id}`}>Course Detail</Link></p>
                            <div className="card-actions justify-between items-center">
                                <div className='flex items-center'>
                                    <span className='text-warning'><FaStar /></span> <p className='m-0 ms-2'>{course?.rating}</p>
                                </div>
                                <Link>
                                    <button className="btn btn-xs btn-primary">Enroll Now</button>
                                </Link>
                                <div className='flex items-center font-bold'>
                                    $ <p className='m-0 ms-2'>{course?.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Course;