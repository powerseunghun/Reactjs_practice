import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { arrayContaining } from '../node_modules/expect/build/index';

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // unique value id
  // use ref.. variable in
  const nextId = useRef(2501);

  // const onInsert = useCallback(
  //   text => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //   },
  //   [todos],
  // );

  // 11.5.1 useState Functional Update
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);

  // const onRemove = useCallback(
  //   id => {
  //     setTodos(todos.filter(todo => todo.id !== id));
  //   },
  //   [todos],
  // );

  // 11.5.1 useState Functional Update
  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  // const onToggle = useCallback(
  //   id => {
  //     setTodos(
  //       todos.map(todo => 
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //         ),
  //     );
  //   },
  //   [todos],
  // );
  // 11.5.1 useState Functional Update
  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  // 11.1 Rendering a lot of data
  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        id: i,
        text: `To do ${i}`,
        checked: false,
      });
    }
    return array;
  }

  // when component rerendering
  // 1. when the received props change
  // 2. when state changes..
  // 3. when parent component rerendering
  // 4. forceUpdate Function Execute

  // analysis : To Do1 check -> App Component's state change
  // so App Component rerendering -> 3. parent component rerendering
  // -> TodoList Component Rerendering
  // -> Many Component in TodoList  all Rerendering
  // -> 2500 Component reredenring instead of 1 Component rerendering

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}

export default App;
