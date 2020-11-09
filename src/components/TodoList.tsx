import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, Todo, toggleTodo } from '../reducers/TodoReducer';
import './TodoList.scss';

type TodoListProps = {
  todo: Todo;
};

const TodoList = ({ todo }: TodoListProps) => {
  const dispatch = useDispatch();

  const todoDone = () => {
    dispatch(toggleTodo(todo.id));
  };

  const todoDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li className={`todolist ${todo.done ? 'done' : ''}`}>
      <span className='text' onClick={todoDone}>
        {todo.text}
      </span>
      <span className='delete' onClick={todoDelete}>
        (x)
      </span>
    </li>
  );
};

export default TodoList;
