import axios from 'axios';
import { config } from '../config.js';

const api = axios.create({
  baseURL: config.api.endpoint
});

export default api;