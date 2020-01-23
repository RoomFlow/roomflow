import React from 'react';
import ReactDOM from 'react-dom';
import Fab from '@material-ui/core/Fab';

import mapImage from './map.png';
import buildingData from './buildings.json';


class Map extends React.Component {
    render() {
        let { results, handleSelect } = this.props;
    
        return (
            <div style={{position: 'relative'}}>
                <img src={mapImage} alt="map" style={{width: 'auto', height: 'calc(100vh - 130px)', objectFit: 'contain'}} />
                {results && results.map(building => (
                    <Fab
                        key={building.buildingName}
                        color="secondary"
                        size="small"
                        variant="extended"
                        onClick={handleSelect(building.buildingName)}
                        style={{
                            position: 'absolute', 
                            left: buildingData[building.buildingName].x,
                            top: buildingData[building.buildingName].y,
                            transform: 'translate(-50%, -50%)',
                            opacity: 0.9,
                            fontWeight: 'bold'
                        }}
                    >{building.buildingName}</Fab>
                ))}
            </div>
        );
    }
}

export default Map;