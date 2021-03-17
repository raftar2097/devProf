
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './Component/SignUp';
import DeveloperProfile from './DeveloperProfile';
import HomePage from './HomePage'
import './index.css';

class  App extends Component{
  render() {
    return (
      <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/developers/:developerId" component={DeveloperProfile} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    )
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);