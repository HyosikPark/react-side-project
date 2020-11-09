import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/TodoReducer';

const TodoWrite = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='할 일 등록'
        value={value}
        onChange={onChange}
      />
      <button>등록</button>
    </form>
  );
};

export default TodoWrite;
