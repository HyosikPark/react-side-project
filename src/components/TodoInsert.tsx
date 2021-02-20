import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hook/useAddTodo';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const { addItem } = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addItem(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder='입력' value={value} onChange={onChange} />
      <button>등록</button>
    </form>
  );
};

export default TodoInsert;
