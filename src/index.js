import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <div>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );

reportWebVitals();
