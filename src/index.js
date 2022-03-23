import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './templates/App';


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

ReactDOM.createPortal(
  <App/>,
  document.getElementById('modal')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
