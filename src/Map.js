import React from 'react';
import ReactDOM from 'react-dom';
import Fab from '@material-ui/core/Fab';

import mapImage from './map.png';
import buildingData from './buildings.json';


class Map extends React.Component {
    render() {
        let { rooms } = this.props;
    
        return (
            <div style={{display: 'inline-block', position: 'relative', height: '100%'}} >
                <img src={mapImage} alt="map" style={{width: 'auto', height: '100%'}} />
                {rooms && rooms.map(building => (
                    <Fab
                        key={building.buildingName}
                        color="secondary"
                        size="small"
                        variant="extended"
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