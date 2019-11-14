import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import moment from 'moment';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalRectSeries } from 'react-vis';

import './App.css';
import config from './config.js'

class App extends Component {
  state = {
    db: null,
    data: null
  };
 
  componentDidMount() {
    firebase.initializeApp(config);
    let db = firebase.firestore();
    let query = db.collection("bsb-101").orderBy("timestamp");

    query.get().then(querySnapshot => {
      this.setState({
        data: querySnapshot.docs.map(doc => doc.data().timestamp.seconds)
      }, () => console.log(this.state))
    }).catch(error => console.log(error));
  }

  graphData() {
    let { data } = this.state;
    let groupedData = [];

    if (data) {
      let rangeStart = moment.unix(data[0]).startOf('hour');
      let rangeEnd = moment.unix(data[0]).endOf('hour');
      let count = 0;

      data.forEach((timestamp, index) => {
        let currentMoment = moment.unix(timestamp);
  
        if (currentMoment.isAfter(rangeEnd)) {
          groupedData.push({
            x0: rangeStart.unix(),
            x: rangeEnd.unix(),
            y: count
          });

          rangeStart = moment(currentMoment).startOf('hour');
          rangeEnd = moment(currentMoment).endOf('hour');
        } else {
          count++;
        }
      });

      groupedData.push({
        x0: rangeStart.unix(),
        x: rangeEnd.unix(),
        y: count
      });
    }
    
    return groupedData;
  }

  render() {
    let graphData = this.graphData();
    console.log(graphData);

    let xMin = moment(graphData.x).startOf('day').unix();
    let xMax = moment(graphData.x).endOf('day').unix();

    return (
      <XYPlot
        xDomain={[xMin, xMax]}
        xType="time"
        width={1000}
        height={600}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalRectSeries data={graphData} style={{stroke: '#fff'}} />
      </XYPlot>
    );
  }
}

export default App;
