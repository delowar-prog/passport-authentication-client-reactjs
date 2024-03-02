import axios from "axios";
import { Link } from "react-router-dom"

const Register = () => {

    const handleSubmit= async (event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
            });

            // Assuming your API response contains a token field
            const { access_token } = response.data;

            // Store the token in local storage
            localStorage.setItem('token', access_token);
            // Redirect or perform any other actions upon successful login
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error
        }
    }

  return (
    <div className="min-h-screen bg-gray-200 py-16">
        <p className="text-end mx-20 text-sm">Go to <span className="text-green-800 cursor-pointer"><Link to={'/'}>Home</Link></span></p>
            <div className="hero-content flex-col lg:flex-row-reverse"> 
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-800">
                <h2 className='text-gray-300 text-xl text-center my-2'>Sign Up</h2> 
                <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-green-950 hover:bg-green-900 text-white">Register</button>
                        </div>
                    </form>
                    <p className='text-white text-sm text-center m-2'>All ready have an account: <span className='cursor-pointer text-green-500'><Link to={'/login'}>Sign In</Link></span></p>
                </div>
            </div>
    </div>
  )
}

export default Register