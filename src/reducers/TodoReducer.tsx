import { useCallback } from 'react';

const ADD_TODO = 'ADD_TODO' as const;
const TOGGLE_TODO = 'TOGGLE_TODO' as const;
const REMOVE_TODO = 'REMOVE_TODO' as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoState = Todo[];

const initialState: TodoState = [
  { id: 1, text: '첫번째', done: true },
  { id: 2, text: '두번째', done: true },
  { id: 3, text: '세번째', done: false },
];

function TodoReducer(
  state: TodoState = initialState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      const nextId =
        state.length === 0 ? 1 : Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default TodoReducer;
