import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
})

// Optional: auto-handle 401 responses
// api.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     if (error.response?.status === 401) {
       // handle session expiration globally
       // maybe logout or redirect
//     }
//     return Promise.reject(error);
//   }
// );