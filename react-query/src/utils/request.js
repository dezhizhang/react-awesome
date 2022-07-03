
import axios from "axios";
axios.interceptors.response.use(response => response.data);

axios.defaults.baseURL = 'http://localhost:8082';

export default axios;
