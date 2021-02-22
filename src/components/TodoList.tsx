import React from 'react';
import { Todo, todosSelector } from '../modules/todos';
import TodoItem from './TodoItem';
import { useTypedSelector } from '../hook/useTypedSelector';

const TodoList = () => {
  const todos: Todo[] = useTypedSelector((state: any) => state.todos);
  const ntodos: number[] = useTypedSelector(todosSelector);
  console.log(ntodos);

  if (todos.length === 0) return <p>등록된 알람이 없습니다.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
