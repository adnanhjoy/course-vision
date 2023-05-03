import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllCourse = ({ course }) => {
    const { id, name, details, img, enroll } = course;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className=' h-40 w-full' src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-between items-center">
                        <div className='flex items-center'>
                            <FaShoppingCart /> <p className='m-0 ms-2'>{enroll}</p>
                        </div>
                        <Link to={`/course/${id}`}>
                        <button className="btn btn-primary">See All Course</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourse;