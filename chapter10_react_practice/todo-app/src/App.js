import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';

// 10.2.2 make TodoInsert
import TodoInsert from './components/TodoInsert';

// 10.2.3 make TodoListItem & TodoList
import TodoList from './components/TodoList';

const App = () => {
  // 10.3 function implementation
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn the basics of react',
      checked: true,
    },
    {
      id: 2,
      text: 'Component Styling',
      checked: true,
    },
    {
      id: 3,
      text: "Make Todo App",
      checked: false,
    },
  ]);

  // unique value id
  // use ref.. variable in
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  )
}

export default App;
