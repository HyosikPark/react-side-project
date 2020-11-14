import React, { useCallback } from 'react';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  console.log(1);
  const { id, text, done } = todo;

  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none',
        }}
        onClick={toggle}
      >
        {text}
      </span>
      <button onClick={remove}>삭제</button>
    </li>
  );
};

export default React.memo(TodoItem);
