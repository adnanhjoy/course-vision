import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import LeftNav from '../Shared/LeftNav/LeftNav';

const CourseLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='grid grid-cols-4'>
                <div className=' col-span-1'>
                    <LeftNav></LeftNav>
                </div>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default CourseLayout;