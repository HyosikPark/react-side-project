import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export const toggleTodoAsync = createAction<number>('toggleTodoAsync');

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      state.push({ id: nextId, text: action.payload, done: false });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo;
      });
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todosSelector = createSelector(
  (state: any) => state.todos,
  (todos) => todos.map((todo: any) => todo.id)
);

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
