import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/Style.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
