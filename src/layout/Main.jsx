import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;