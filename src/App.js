import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import './css/admin.css';
import './css/admin.responsive.css';

import MainPage from './main components/MainPage';
import LoginPage from './main components/Login Register/LoginPage';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
              <Switch>
                  <Route path="/" exact component={LoginPage} />
                  <Route path="/admin" component={MainPage} />
              </Switch>   
          </div>
        </Router>
    </Provider>
    )
  }
}

export default App
