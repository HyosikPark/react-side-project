import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem/>', () => {
  const sampleTodo = {
    id: 1,
    text: 'TDD 배우기',
    done: true,
  };
  const setup = (props = {}) => {
    const initialState = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialState} {...props} />);
    const { getByText } = utils;
    const todo = props.todo || initialState.todo;
    const span = getByText(todo.text);
    const button = getByText('삭제');
    return {
      ...utils,
      span,
      button,
    };
  };

  it('has span and button', () => {
    const { span, button } = setup();
    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('show line-through on span when done is true', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle('text-decoration: line-through;');
  });
  it('show line-through on span when done is false', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } });
    expect(span).not.toHaveStyle('text-decoration: line-through;');
  });

  it('calls on Toggle', () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it('calls on Remove', () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
