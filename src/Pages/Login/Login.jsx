import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const handleSubmitSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success('Login Succesfull')
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleSubmitGoogle = () => {
        googleSignIn()
            .then(result => {
                result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmitSignIn} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <label className="label">
                                    <small>Your don't have an account? <Link to='/register' className='link link-hover'>Create a new account</Link></small>
                                </label>
                            </div>

                        </form>
                        <div className="form-control card-body mb-6">
                            <button onClick={handleSubmitGoogle} className="btn bg-blue-700"><span className='me-5'><FaGoogle /></span> Sign in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;