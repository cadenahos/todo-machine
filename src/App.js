// import './App.css';
import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import { TodoItem } from "./TodoItem";
const TODOS = [
  {
    "Descripcion": "Hacer el cafe",
    
  },
  {
    "Descripcion": "Limpiar cafetera",
  },
  {
    "Descripcion": "Limpiar cocina",
  }
]
function App() {
  return (
    
    // <CreateTodoButtom/>
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {TODOS.map(todo => (
          <TodoItem key={todo.Descripcion} descripcion={todo.Descripcion}/>
        ))} 
    </TodoList>
    <button>+</button>
  </React.Fragment>
  );
}

export default App;
