import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const express = require('express');
console.log("at index.js");

//const app = express();
const port = 3000;
/*
 app.get('/', (req, res) => {
  res.send(ReactDOM.render(
                           <React.StrictMode>
                             <App />
                           </React.StrictMode>,
                           document.getElementById('root')
                         ));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

