import React from 'react';
import useTodoActions from '../hook/useTodoActions';
import { Todo } from '../modules/todos';
import './TodoItem.css';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleItem, removeItem } = useTodoActions();

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className='text' onClick={() => toggleItem(todo.id)}>
        {todo.text}
      </span>
      <span className='remove' onClick={() => removeItem(todo.id)}>
        (x)
      </span>
    </li>
  );
};

export default React.memo(TodoItem);
