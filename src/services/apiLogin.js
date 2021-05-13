import axios from 'axios';

const apiLogin = axios.create({
  baseURL: `http://localhost:3333`
});

export default apiLogin;