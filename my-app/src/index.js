import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Candidate from "./Component/Candidate"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Candidate/>
      <App />
  </React.StrictMode>
);


