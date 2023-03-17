import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    if(window.localStorage.getItem('token'))
        return <Outlet/>

        window.location.replace(`${window.location.origin}/login`)
}

export default ProtectedRoute