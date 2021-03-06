import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "semantic-ui-css/semantic.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './Reducer'
import StateProvider from './StateProvider'
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}  >
      <App />
    </StateProvider>
    <ToastContainer autoClose={2000} />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
