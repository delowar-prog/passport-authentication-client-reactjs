import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-16">
        <p className="text-end mx-20 text-sm">Go to <span className="text-green-800 cursor-pointer"><Link to={'/'}>Home</Link></span></p>
            <div className="hero-content flex-col lg:flex-row-reverse"> 
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-800">
                <h2 className='text-gray-300 text-xl text-center my-2'>Sign Up</h2> 
                <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-950 hover:bg-green-900 text-white">Register</button>
                        </div>
                    </form>
                    <p className='text-white text-sm text-center m-2'>All ready have an account: <span className='cursor-pointer text-green-500'><Link to={'/login'}>Sign In</Link></span></p>
                </div>
            </div>
    </div>
  )
}

export default Register