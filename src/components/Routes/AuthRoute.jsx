import { Navigate, Outlet } from "react-router-dom"

const AuthRoute = () => {
    if(window.localStorage.getItem('token'))
        return <Navigate to="/home" />

        return <Outlet/>
}

export default AuthRoute