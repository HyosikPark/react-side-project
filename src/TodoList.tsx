import React from 'react';
import TodoItem, { Todo } from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (x: number) => void;
  onRemove: (x: number) => void;
};

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  return (
    <ul data-testid='TodoList'>
      {todos.map((todo: Todo) => (
        <TodoItem
          onToggle={onToggle}
          onRemove={onRemove}
          todo={todo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
