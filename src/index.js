import React from 'react';
import { createStore, compose, applyMiddleware } from "redux"
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux/es/exports';
import { spamFilter } from './redux/middleware';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk'
import './css/index.css';
import App from './App';
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>);
/* </React.StrictMode > */
