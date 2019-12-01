import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './comp/Counter';
import App from './app';
const element = <h1>hello world!</h1>;
ReactDOM.render(<Counter><App /></Counter>,document.getElementById('root'));