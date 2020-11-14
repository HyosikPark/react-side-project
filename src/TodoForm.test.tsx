import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm/>', () => {
  const setup = (props = {}) => {
    const { getByText, getByPlaceholderText } = render(<TodoForm {...props} />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByText('등록');
    return {
      input,
      button,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('changes input', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: 'TDD' } });
    expect(input).toHaveAttribute('value', 'TDD');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();

    const { input, button } = setup({ onInsert });

    fireEvent.change(input, { target: { value: 'TDD' } });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD');
    expect(input).toHaveAttribute('value', '');
  });
});
