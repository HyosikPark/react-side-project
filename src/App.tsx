import React from 'react';
import TodosList from './components/TodosList';
import TodoWrite from './components/TodoWrite';

const App = () => {
  return (
    <>
      <TodoWrite />
      <TodosList />
    </>
  );
};

export default App;
