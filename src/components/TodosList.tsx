import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../reducers/rootReducer';
import { TodoState } from '../reducers/TodoReducer';
import TodoList from './TodoList';

const TodosList = () => {
  const todos: TodoState = useSelector((state: rootState) => state.TodoReducer);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoList todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodosList;
