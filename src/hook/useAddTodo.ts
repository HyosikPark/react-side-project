import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';

export default function useAddTodo() {
  const dispatch = useDispatch();

  const addItem = useCallback((text: string) => dispatch(addTodo(text)), [
    dispatch,
  ]);

  return {
    addItem,
  };
}
