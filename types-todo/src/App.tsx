import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm } from "./components/TodoForm"
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, {text: newTodo, complete: false}])
    }
  }

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updateTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {...todo, complete: !todo.complete}
      }
    })
  }


  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
