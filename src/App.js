import React from 'react';
import './App.css';
import SignInSide from './SignInSide';
import TopNav from './TopNav';
import ResultsPage from './ResultsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      filter: {
        "capacity": {
          "size": 0,
          "comparison": "GREATER_THAN_EQUAL_TO"
        },
        "building": ""
      }
    }
  }

  updateFilter(field) {
    return event => {
      this.setState({
        filter: {...this.state.filter, [field]: event.target.value}
      })
    }
  }

  toggleFilter(field) {
    return event => {
      this.setState({
        filter: {...this.state.filter, [field]: !this.state.filter[field]}
      })
    }
  }

  updateCapacitySize(event) {
    this.setState({
      filter: {
        ...this.state.filter, capacity: {
          size: event.target.value, 
          comparison: this.state.filter.capacity.comparison
        }
      } 
    })
  }

  updateCapacityComparison(event) {
    this.setState({
      filter: {
        ...this.state.filter, capacity: {
          comparison: event.target.value, 
          size: this.state.filter.capacity.size
        }
      } 
    })
  }

  search() {
    let data = { filter: {}};
    Object.assign(data.filter, this.state.filter);

    for (let [key, value] of Object.entries(data.filter)) {
      if (!value) {
        delete data.filter[key];
      }
    }

    fetch('http://roomflow-env-2.fp7qjqi6g4.us-east-2.elasticbeanstalk.com:8080/v1/search/filter', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      let buildingObject = data.rooms.reduce((groupedRooms, room) => {
        groupedRooms[room['Building']] = groupedRooms[room['Building']] || [];
        groupedRooms[room['Building']].push(room);
        return groupedRooms;
      }, {});
      
      let buildingList = Object.keys(buildingObject).map(name => ({
        buildingName: name,
        rooms: buildingObject[name]
      }))

      this.setState({
        searchResults: buildingList
      })

      console.log('Results:', buildingList);
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
            <Route path="/results">
              <ResultsPage results={this.state.searchResults} />
            </Route>
            <Route path="/">
              <SignInSide 
                updateFilter={this.updateFilter.bind(this)} 
                filterData={this.state.filter}
                search={this.search.bind(this)}
                toggleFilter={this.toggleFilter.bind(this)}
                updateCapacitySize={this.updateCapacitySize.bind(this)}
                updateCapacityComparison={this.updateCapacityComparison.bind(this)}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
