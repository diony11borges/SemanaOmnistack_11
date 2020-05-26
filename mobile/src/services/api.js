import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.2.131:3333'
});

export default api;

// Parei na aula 4 em 1:09:00