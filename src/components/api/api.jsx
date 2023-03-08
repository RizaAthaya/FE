import axios from "axios"

const createAxiosInstance = () => {
    const axiosInstance = axios.create({ //closure
        baseURL: 'http://103.189.235.157:10015/'
        // ganti basURL
    })
    return axiosInstance
}

export { createAxiosInstance }
