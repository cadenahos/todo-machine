import React from "react";
import '../styles/Item.css';

function TodoItem(props){
    return(
        <li className="item">
            <span 
                className="item-close"
                onClick={props.onDelete}
            >
                x
            </span>
            <span 
                className={`my-check ${props.completed && 'my-check--active'}`}
                onClick={props.onComplete}
            >
                †
            </span>
            <span className={`my-description ${props.completed && 'my-description--completed'} `}>
                {props.description}
            </span>
        </li>
    )
}

export {TodoItem};