import React from 'react';
import { useDispatch } from 'react-redux';
import useTodoActions from '../hook/useTodoActions';
import { Todo, toggleTodoAsync } from '../modules/todos';
import './TodoItem.css';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleItem, removeItem } = useTodoActions();

  const dispatch = useDispatch();

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className='text' onClick={() => dispatch(toggleTodoAsync(todo.id))}>
        {todo.text}
      </span>
      <span className='remove' onClick={() => removeItem(todo.id)}>
        (x)
      </span>
    </li>
  );
};

export default React.memo(TodoItem);
