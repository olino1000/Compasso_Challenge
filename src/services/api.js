import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.github.com',
});

api.interceptors.request.use(async (config) => {
	const token = localStorage.getItem('access_token');
	if (token !== '') api.defaults.headers.Authorization = `Bearer ${token}`;

	return config;
});

export default api;
