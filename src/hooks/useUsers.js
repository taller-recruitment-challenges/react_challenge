import { useQuery } from 'react-query';
import { fetchUsers } from '../services/UsersService';

function useUsers() {
  return useQuery('users', () => fetchUsers().then(res => res.data));
}

export default useUsers;