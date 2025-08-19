import axios from 'axios';
import { API_URL } from '../config/apiUrl.config';

const api = axios.create({
  baseURL: API_URL, // e.g., "http://localhost:5000"
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
