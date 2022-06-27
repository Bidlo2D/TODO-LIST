import React from 'react';
import { createStore } from "redux"
import { rootReducer } from './redux/rootReducer';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import './index.css';
import App from './App';
const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
