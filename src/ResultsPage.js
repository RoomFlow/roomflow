import React from 'react';
import { Divider } from '@material-ui/core';

import TopNav from './TopNav.js';
import Map from './Map.js';
import ResultsList from './ResultsList.js';

function ResultsPage(props) {
  const [selectedBuilding, setSelectedBuilding] = React.useState(true);

  const handleSelect = value => () => {
    setSelectedBuilding(value === selectedBuilding ? null : value);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
      <TopNav />
      <Divider />
      <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
        <div style={{flexGrow: 1}}>
          <ResultsList results={props.results} handleSelect={handleSelect} selectedBuilding={selectedBuilding} />
        </div>
        <Map results={props.results} handleSelect={handleSelect} selectedBuilding={selectedBuilding} />
      </div>
    </div>
  );
}
  
export default ResultsPage;