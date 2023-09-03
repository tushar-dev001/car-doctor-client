import { Link } from 'react-router-dom'
import login from '../assets/images/login/login.svg'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'


const Registration = () => {

  const {createUser} = useContext(AuthContext)

    const handleRegister =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const values ={ name, email, password }
        console.log(values);

        createUser(email, password)
        .then(result =>{
          const user = result.user
          console.log(user);
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
      <h1 className="text-3xl text-center font-bold">Registration</h1>
        <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="name" className="input input-bordered" />
          </div>
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
            <button className="btn btn-primary">Registration</button>
          </div>
          <div>
            <p>Already have an account? <span className='font-bold text-orange-500'><Link to='/login'>Login</Link></span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Registration