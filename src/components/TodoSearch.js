import React, { useContext } from "react";
import Form  from "react-bootstrap/Form";
import { TodoContext } from "../context";

function TodoSearch(){
    
    const {searchValue, setSearchValue} = useContext(TodoContext);
    const onSearchChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return(
        <>
            <Form.Control 
                size="lg" 
                type="text" 
                placeholder="ingrese tarea" 
                value={searchValue}
                onChange={onSearchChange}
            />
        </>
    )
}

export {TodoSearch};