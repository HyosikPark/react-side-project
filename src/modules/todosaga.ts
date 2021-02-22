import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { toggleTodo, toggleTodoAsync } from './todos';

function* toggleSaga(action: PayloadAction<number>) {
  yield delay(1000);
  yield put(toggleTodo(action.payload));
}

export function* todosSaga() {
  yield takeLatest(toggleTodoAsync, toggleSaga);
}
