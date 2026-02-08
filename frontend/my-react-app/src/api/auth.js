import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000'; // Update with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (email, password, role) => {
    const response = await api.post('/auth/register', { 
      email, 
      password, 
      role 
    });
    return response.data;
  },
};

export default api;