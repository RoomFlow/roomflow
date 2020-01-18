import React from 'react';
import './App.css';
// import S from '@material-ui/core/Button';
import SignInSide from './SignInSide';
import TopNav from './TopNav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/loggedIn">
            <TopNav></TopNav>
          </Route>
          <Route path="/">
            <SignInSide></SignInSide>
          </Route>
        </Switch>
      </div>


    </Router>

  );
}

export default App;
