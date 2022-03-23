import React from "react";
import '../styles/List.css';
function TodoList(props){
    return(
        <React.Fragment>
            <ul className="list">
                {props.children}
            </ul>
        </React.Fragment>
    )
}

export {TodoList};