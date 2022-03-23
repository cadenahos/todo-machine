import {useState, useEffect} from "react";

function UseLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const[item, setItem] = useState(initialValue);

    useEffect(()=>{
        setTimeout(()=>{
        try{

            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if(!localStorageItem){
            localStorage.setItem('TODO_V1', JSON.stringify(initialValue));
            parsedItem = initialValue;
            }else{
            parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
        } catch(error){
            setError(error);
        }
        }, 1000);
    });
// set local storages

    const saveItem  = (newTodos)=>{
        try {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newTodos);
        }
        catch(error){
        setError(error);
        }
    };

    return {
        error,
        item,
        saveItem,
        loading
    }

}

export {
    UseLocalStorage
}