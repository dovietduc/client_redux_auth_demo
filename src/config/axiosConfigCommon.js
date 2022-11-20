import axios from 'axios';

const axiosCommon = () => {
    axios.defaults.baseURL = 'http://localhost:5000';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
}

export default axiosCommon;