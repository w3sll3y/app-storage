import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api-storage-ttr7.onrender.com",
})