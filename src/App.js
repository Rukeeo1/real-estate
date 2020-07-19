import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">Hello boo</div>
      </Router>
    </Provider>
  );
}

export default App;
