import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Courses from '../Pages/Courses/Courses';
import Faq from '../Pages/Faq/Faq';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Course from '../Pages/Course/Course';
import CourseLayout from '../layout/CourseLayout';
import CourseDetail from '../Pages/CourseDetail/CourseDetail';
import PrivateRoute from './PrivateRoute';
import CheckOut from '../Pages/CheckOut/CheckOut';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://course-vision-server.vercel.app/courses')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '/course/:id',
        element: <CourseLayout></CourseLayout>,
        children: [
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://course-vision-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/course/:id/course-detail/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://course-vision-server.vercel.app/course-detail/${params.id}`)
            },
            {
                path: '/course/:id/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://course-vision-server.vercel.app/course-detail/${params.id}`)
            }
        ]
    },

])

const Routes = () => {
    return (
        <div>

        </div>
    );
};

export default Routes;