import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { arrayContaining } from '../node_modules/expect/build/index';

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

// 11.5.2 use -> useReducer (rendering optimization)
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // add new one
      // { type: 'INSERT', todo: {id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE': // remove
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      // { type: 'REMOVE', id: 1 }
      return todos.map(todo => 
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);

  // 11.5.2 useReducer (rendering optimization)
  // Originally -> second parameter in initial state
  // but second parameter in undefined, third parameter in initial state
  // --> when component's first rendering createBulkTodos Function call
  
  // useReducer method
  // Advantage : Logic for updating status can be placed outside the component.
  // Weakness : Need to correct many of the exist code.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

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
    // setTodos(todos => todos.concat(todo));

    // 11.5.2 useReducer rendering optimization
    dispatch({ type: 'INSERT', todo });
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
    // setTodos(todos => todos.filter(todo => todo.id !== id));

    // 11.5.2 useReducer rendering optimization
    dispatch({ type: 'REMOVE', id });
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
    // setTodos(todos =>
    //   todos.map(todo =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );

    // 11.5.2 useReducer rendering optimization
    dispatch({ type: 'TOGGLE', id });
  }, []);

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
