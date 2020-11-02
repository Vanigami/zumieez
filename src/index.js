import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"
import shoppingCartReducer from "./reducers/shoppingCartReducer"
import App from './App';

const store = createStore(shoppingCartReducer)
//state changes in response to shoppingcartreducer's filtered actions


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


