import axios from 'axios';

const axiosCommon = () => {
    axios.defaults.baseURL = 'http://localhost:5000';

    // Add a request interceptor
    axios.interceptors.request.use(
        function (config) {
            // Do something before request is sent
            config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );
};

export default axiosCommon;
