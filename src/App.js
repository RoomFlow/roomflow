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
      filter: {
        "capacity": {
          "size": 0,
          "comparison": "GREATER_THAN"
        },
        "building": ""
      }
    }
  }

  // componentDidMount() {
  // }

  updateFilter(field) {
    return event => {
      this.setState({
        filter: {...this.state.filter, [field]: event.target.value}
      })
    }
  }

  search(event) {
    event.preventDefault();

    let data = { filter: {}};
    Object.assign(data.filter, this.state.filter);

    for (let [key, value] of Object.entries(data.filter)) {
      if (!value) {
        delete data.filter[key];
      }
    }

    console.log(data);

    fetch('http://roomflow-env-2.fp7qjqi6g4.us-east-2.elasticbeanstalk.com:8080/v1/search/filter', {
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
              <SignInSide 
                updateFilter={this.updateFilter.bind(this)} 
                filterData={this.state.filter}
                search={this.search.bind(this)}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
