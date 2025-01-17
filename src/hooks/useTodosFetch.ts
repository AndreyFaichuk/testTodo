import { useQuery } from '@tanstack/react-query';
import { TodoApi } from '../api/todo.api';

export const todosQueryKeys = {
  todos: {
    all: () => ['todos', 'all'],
    one: (id: string) => ['todos', 'one', id],
  },
};

export const useTodosFetch = () => {
  const { data: allTodos, isLoading } = useQuery({
    queryKey: todosQueryKeys.todos.all(),
    queryFn: async () => {
      const response = await TodoApi.getTodos();

      return response.data;
    },
  });

  // const { isConnected } = useSocketTodos();

  return {
    allTodos: allTodos ?? [],
    areAllTodosLoading: isLoading,
  };
};
