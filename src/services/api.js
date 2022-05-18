import axios from 'axios'
import { GetItem } from './auth';

export const db = axios.create({
    baseURL: 'https://backfab.azurewebsites.net/api'
    // baseURL: 'http://localhost:5000/api'
})

export const mock = axios.create({
    baseURL: 'https://626a808e737b438c1c496638.mockapi.io'
})

export const cam = axios.create({
    baseURL: 'https://api.meraki.com/api/v1'
})

db.interceptors.request.use(async config => {
    const token = GetItem();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });