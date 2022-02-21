import axios from 'axios';

const api = axios.create({
    baseURL: 'https://testdeploy.classclinic.com.br'
});

export default api;