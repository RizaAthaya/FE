import axios from "axios"

const createAxiosInstance = () => {
    const axiosInstance = axios.create({ //closure
        baseURL: 'https://reyhafiz.aenzt.tech/'
        // ganti basURL
    })
    return axiosInstance
}

export { createAxiosInstance }
