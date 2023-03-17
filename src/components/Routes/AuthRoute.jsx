import { Navigate, Outlet } from "react-router-dom"

const AuthRoute = () => {
    if(window.localStorage.getItem('token'))
        // return <Navigate to="/home" />
        window.location.replace(`${window.location.origin}/home`)
    else
        return children
}

export default AuthRoute