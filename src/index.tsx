import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import App  from './App';

axios.defaults.baseURL="https://api.devempower.ir/TicketierAPI" 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
