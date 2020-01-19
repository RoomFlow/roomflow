import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const iahs = {
    building: "IAHS",
    number: "B102",
    maxOccupancy: 204,
    hasWindows: false,
    isAccessible: true
  }
  
  const jheLab = {
    building: "JHE",
    number: "202",
    maxOccupancy: 20,
    hasWindows: false,
    isAccessible: false
  }
  
  const thodeBasement = {
    building: "Thode",
    number: "Study Room 9",
    maxOccupancy: 9,
    hasWindows: false,
    isAccessible: true
  }
  const rooms = [
    iahs,
    jheLab,
    thodeBasement
  ];

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item>
        <Grid container justify="center" spacing={spacing}>
        {/* Replace this numbers array with the array of the rooms returned from the search criteria */}
          {rooms.map(value => (
            <Grid key={value} item>
              
              <Paper className={classes.paper}>
                <h3>{value.building} {value.number}</h3>
                <p>Insert key information here</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}