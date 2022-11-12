import axios from 'axios';

const authAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`
    }
})

export default authAxios;