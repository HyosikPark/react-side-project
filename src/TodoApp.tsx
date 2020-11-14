import React, { useCallback, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import { Todo } from './TodoItem';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true,
    },
  ]);
  const nextId = useRef(3); // 새 추가항목 id

  const onInsert = useCallback((text: string) => {
    setTodos((prev) =>
      prev.concat({
        id: nextId.current,
        text,
        done: false,
      })
    );
    nextId.current += 1;
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} data-testid='helloworld' />
      <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
    </>
  );
};

export default TodoApp;
