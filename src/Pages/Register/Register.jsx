import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);


    const handleSubmitRegister = event => {
        event.preventDefault();
        const form = event.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const name = fname + " " + lname;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            result.user;
            updateUser(name)
            form.reset()
        })
        .catch(error => console.error(error))
    }

    const updateUser = (name) => {
        updateUserProfile(name)
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup Your Account!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmitRegister} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="first name" className="input input-bordered" name='fname' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="last name" className="input input-bordered" name='lname' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password'/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                                <label className="label">
                                    <small>Already have an account? <Link to='/login' className='link link-hover'>login</Link></small>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;