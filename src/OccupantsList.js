import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DiscreteSlider from './Occupants'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup(props) {
  const classes = useStyles();
  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Range</FormLabel>
        <RadioGroup value={props.value} onChange={props.handleChange}>
          <FormControlLabel value="GREATER_THAN_EQUAL_TO" control={<Radio color="primary"/>} label="At least" />
          <FormControlLabel value="LESS_THAN_EQUAL_TO" control={<Radio color="primary" />} label="At most" />
          <FormControlLabel value="EQUAL_TO" control={<Radio color="primary" />} label="Equal to" />
        </RadioGroup>
      </FormControl>
      <FormControl className={classes.formControl}>
        <DiscreteSlider value={props.sizeValue} handleChange={props.handleSizeChange} > </DiscreteSlider>
      </FormControl>
    </div>
  );
}