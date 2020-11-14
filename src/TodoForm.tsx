import React, { useCallback, useState } from 'react';

type TodoFormProps = {
  onInsert: (x: string) => void;
};

const TodoForm = ({ onInsert }: TodoFormProps) => {
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>등록</button>
    </form>
  );
};

export default React.memo(TodoForm);
