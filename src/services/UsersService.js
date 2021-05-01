import api from '../config/api';

export const fetchUsers = () => api.get('/users');