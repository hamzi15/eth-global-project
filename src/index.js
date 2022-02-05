import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis"

const APP_ID = process.env.APP_ID || '2bq0lEgR6y4vXU7Ce9HO31MYDz8ydPiJnaWdq93W'
const SERVER_ID = process.env.SERVER_ID || 'https://o0xjvjekaxju.usemoralis.com:2053/server' 
console.log(APP_ID,SERVER_ID)

ReactDOM.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_ID}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
