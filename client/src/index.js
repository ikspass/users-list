import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import UserStore from './store/UserStore';
import UsersListStore from './store/UserListStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    users: new UsersListStore()
  }}>
    <App />

  </Context.Provider>,
);