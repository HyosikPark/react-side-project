import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../modules/todos';

export default function useTodoActions() {
  const dispatch = useDispatch();

  const toggleItem = useCallback((id: number) => dispatch(toggleTodo(id)), [
    dispatch,
  ]);
  const removeItem = useCallback((id: number) => dispatch(removeTodo(id)), [
    dispatch,
  ]);

  return {
    toggleItem,
    removeItem,
  };
}
