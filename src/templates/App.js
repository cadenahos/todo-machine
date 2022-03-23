import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { TodoProvider } from '../context';
import Home from './home';



function App() {

  return (
    <TodoProvider>
      <Home/>
    </TodoProvider>
  );
}

export default App;
