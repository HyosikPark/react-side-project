import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import todosReducer from './todos';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { todosSaga } from './todosaga';

const rootReducer = combineReducers({
  todos: todosReducer,
});

function* rootSaga() {
  yield all([todosSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
