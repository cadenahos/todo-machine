import React, {useState, useEffect} from "react";
import { UseLocalStorage } from "../hooks/useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = UseLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter(item => !!item.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoLower = todo.Descripcion.toLowerCase()
            const searchValueLower = searchValue.toLowerCase();

            return todoLower.includes(searchValueLower);
        })
    }
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            Descripcion: text,
        })
        saveTodos(newTodos);
    }
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.Descripcion === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.Descripcion === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    useEffect(() => {
        console.log('use effect');
    }, [totalTodos]);

    return ( 
        <TodoContext.Provider value = {
            {
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                addTodo,
                openModal,
                setOpenModal,
            }
        }> 
            {
                props.children
            } 
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};