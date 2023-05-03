import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">Sorry Page Not Found</p>
                    <Link to='/'>
                        <button className="btn btn-ghost">Back To Home Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;