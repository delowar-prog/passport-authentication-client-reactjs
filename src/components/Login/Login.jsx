import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password,
            });

            // Assuming your API response contains a token field
            const { token } = response.data;

            // Store the token in local storage
            localStorage.setItem('token', token);
            setEmail("")
            setPassword("")
            // Redirect or perform any other actions upon successful login
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error
        }
    };
    return (
        <div className="min-h-screen bg-gray-200 py-16">
            <div className="hero-content flex-col lg:flex-row-reverse"> 
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-800">
                <h2 className='text-gray-300 text-xl text-center my-2'>Sign In</h2> 
                <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt text-white link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-950 hover:bg-green-900 text-white">Login</button>
                        </div>
                </form>
                    <p className='text-white text-sm text-center m-2'>Create a new account: <span className='cursor-pointer text-green-500'><Link to={'/register'}>Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login