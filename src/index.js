import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App classname='body'/> 
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'));
