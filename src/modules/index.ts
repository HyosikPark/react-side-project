import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
