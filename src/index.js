import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';


const BrowserApp = <BrowserRouter>
                        <App/>
                   </BrowserRouter>

ReactDOM.render(BrowserApp, document.getElementById('root'));

