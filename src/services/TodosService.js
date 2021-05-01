import api from '../config/api';

export const fetchTodos = userId => api.get('todos', { params: { userId } });