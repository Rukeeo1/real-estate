import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Input from 'components/Input';
import Buttons from 'components/Buttons';
import AuthPage from 'pages/Auth';
import DashBoard from 'pages/Dashboard';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <DashBoard />
      </Router>
    </Provider>
  );
}

export default App;
