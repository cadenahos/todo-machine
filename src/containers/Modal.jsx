import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../context';
import { Form, Button } from 'react-bootstrap';
import '../styles/Modal.css';

const Modal = ({children}) => {
    const {
        setOpenModal,
        addTodo,
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }
    const onChange= (event)=>{
        setNewTodoValue(event.target.value);
        console.log(newTodoValue);
    }
    return ReactDOM.createPortal (
        <div className="ModalBackground">
            <div className='ModalContainer'>
                <div className='ModalHeader'>
                    <span className='ModalClose' onClick={()=>setOpenModal(false)}>x</span>
                    <h2>Add a new <b>task</b></h2>
                </div>
                <div className='ModalBody'>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-12" >
                        <Form.Control type="text" onChange={onChange} value={newTodoValue} placeholder="Please, write new task " />
                    </Form.Group>
                    <hr></hr>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form>
                </div>
            </div>
            {children}
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;