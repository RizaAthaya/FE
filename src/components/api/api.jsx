import axios from "axios"

const createAxiosInstance = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/'
        // ganti basURL
    })
    return axiosInstance
}

export { createAxiosInstance }
