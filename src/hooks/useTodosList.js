import { useQuery } from "react-query";

import { fetchTodos } from "../services/TodosService";

function useTodosList(userId) {
  return useQuery(["todosList", userId], () =>
    fetchTodos(userId).then(res => res.data)
  );
}

export default useTodosList;
