import React, {useContext} from 'react';
import { TodoContext } from '../context';
import {TodoCounter} from "../components/TodoCounter";
import {TodoSearch} from "../components/TodoSearch";
import {TodoList} from "../containers/TodoList";
import { TodoItem } from "../components/TodoItem";
import Modal from '../containers/Modal';
import Button from "react-bootstrap/Button";

const Home = () => {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    }  = useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <div className='todo-container'>
                <TodoSearch/>
                <TodoList>
                    {error && <p>Se presento un error, nuestros ingenieros ya estan reportados y van a trabajar para arreglarlo</p>}
                    {loading && <p>Estamos cargando, estamos trayendo tu información</p>}
                    {(!loading && !searchedTodos.length) && <p>Estamos cargando, estamos trayendo tu información</p>}
                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.Descripcion} 
                        description={todo.Descripcion}
                        completed = {todo.completed}
                        onComplete = {()=>{completeTodo(todo.Descripcion)}}
                        onDelete = {()=>{deleteTodo(todo.Descripcion)}}
                    />
                    ))} 
                </TodoList>
                <Button 
                variant="primary" 
                className="foo-button"
                onClick={()=> setOpenModal(true)}
                >
                +
                </Button>
            </div>
            {!!openModal && (
                <Modal
                    
                >
                    
                </Modal>
            )}
        </React.Fragment>
    );
};

export default Home;