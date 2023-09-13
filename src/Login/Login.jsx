import { Link, useLocation, useNavigate } from 'react-router-dom'
import login from '../assets/images/login/login.svg'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import SocialLogin from '../Pages/Shared/SocialLogin/SocialLogin'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location);
  let from = location.state?.from?.pathname || "/"
  // console.log(from);

  const {signIn} = useContext(AuthContext)

    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const values ={ email, password }
        console.log(values);

        signIn(email, password)
        .then(result =>{
          const user = result.user
          console.log(user);
          navigate(from, {replace: true})

        })
        .then(error =>console.log(error))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left w-1/2 mr-12">
        
        <img src={login} alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-3xl text-center font-bold">Login</h1>
        <form onSubmit={handleLogin} className="card-body">
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name='password' placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            <p>Have an account? <span className='font-bold text-orange-500'><Link to='/registration'>Registration</Link></span></p>

            <SocialLogin/>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login