import React from 'react';
import './App.css';
import SignInSide from './SignInSide';
import TopNav from './TopNav'
import SpacingGrid from './SearchResults'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null,
    }
  }

  componentDidMount() {
    console.log('hello world');
    console.log(this.search('hello'));
  }

  search() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const data = {
      "filter": {
        "capacity": {
          "size": 0,
          "comparison": "GREATER_THAN"
        },
        "roomType": "ANY_ROOM",
        "building": "ANY_BUILDING"
      }
    };  

    fetch('http://roomflow-env-2.fp7qjqi6g4.us-east-2.elasticbeanstalk.com:443/v1/search/filter', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  render() {
    return (
      <Router> 
        <div className="App">
          <Switch>
            <Route path="/loggedIn">
              <TopNav></TopNav>
              <SpacingGrid></SpacingGrid>
            </Route>
            <Route path="/">
              <SignInSide></SignInSide>
            </Route>
          </Switch>
        </div>
      </Router>
  
    );
  }
}

export default App;
