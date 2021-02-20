import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos: Todo[] = useSelector((state: RootState) => state.todos);

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
