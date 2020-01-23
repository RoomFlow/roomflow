import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Number of Occupants
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
    </div>
  );
}