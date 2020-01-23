import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import buildingData from './buildings.json';
import RoomsTable from './RoomsTable.js'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 140px)',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ResultsList(props) {
  const classes = useStyles();
  let { selectedBuilding, handleSelect } = props;

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Results
        </ListSubheader>
      }
      className={classes.root}
    >
      {props.results.map(building => (
        <>
          <ListItem button key={building.buildingName} onClick={handleSelect(building.buildingName)}>
            <ListItemText primary={buildingData[building.buildingName].name} />
            {(selectedBuilding === building.buildingName) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse key={`${building.buildingName}-collapse`} in={selectedBuilding === building.buildingName} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <RoomsTable rooms={building.rooms} />
              </ListItem>
            </List>
          </Collapse>
        </>
      ))}
    </List>
  );
}
  
export default ResultsList;