import { User } from '@modules/users/infra/typeorm/entities/User'
import { Todo } from '../infra/typeorm/entities/Todo'

interface ITodoRepository {
  createTodo(
    body: string,
    user: User
  ): Promise<void>
  setTodoStatus(id: string, status: boolean): Promise<void>
  deleteTodo(id: string): Promise<void>
  setTodoId(id: string, newId: string): Promise<void>
  findTodosByUser(id: string): Promise<Todo[]>
}

export { ITodoRepository }
