import axios from 'axios';
const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'https://nexcrm-api-r0p1.onrender.com/api'});
api.interceptors.request.use(c=>{const t=localStorage.getItem('nexcrm_token');if(t)c.headers.Authorization=`Bearer ${t}`;return c});
export default api;
