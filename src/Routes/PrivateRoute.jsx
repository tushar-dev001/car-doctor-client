import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoute = ({children}) => {
    console.log(children);
    const {user, loading} = useContext(AuthContext)
    console.log(user, loading);
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }


    if(user?.email){
        return children
    }
  return <Navigate to='/login' state={{from: location}}></Navigate>
}

export default PrivateRoute