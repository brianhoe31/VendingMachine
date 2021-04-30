import './App.css';
import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='App-nav'>
          <ul>
            <li><NavLink exact activeClassName='active-link' to="/soda">Soda</NavLink></li>
            <li><NavLink exact activeClassName='active-link' to="/chips">Chips</NavLink></li>
            <li><NavLink exact activeClassName='active-link' to="/sardines">Sardines</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />}/>
          <Route exact path="/chips" render={() => <Chips />}/>
          <Route exact path="/sardines" render={() => <Sardines />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
