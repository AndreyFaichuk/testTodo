import { TodoCardProps } from '../pages/TodosPage/components/TodoCard/TodoCard.types';

type ApiResponse<T> = Promise<T>;

const BASE_URL = 'http://localhost:8000/api/todos';

export class TodoApi {
  static async addTodo(newTodo: TodoCardProps): ApiResponse<TodoCardProps> {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    const todo: TodoCardProps = await response.json();
    return todo;
  }

  static async updateTodo(todo: TodoCardProps): ApiResponse<TodoCardProps> {
    const response = await fetch(`${BASE_URL}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    const res: TodoCardProps = await response.json();
    return res;
  }

  static async deleteTodo(id: string): ApiResponse<TodoCardProps> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    const res: TodoCardProps = await response.json();
    return res;
  }

  static async getTodos(): ApiResponse<TodoCardProps[]> {
    const response = await fetch(`${BASE_URL}`);
    const todos: TodoCardProps[] = await response.json();
    return todos;
  }

  static async getTodo(id: string): ApiResponse<TodoCardProps> {
    const response = await fetch(`${BASE_URL}/${id}`);
    const todo: TodoCardProps = await response.json();
    return todo;
  }
}
