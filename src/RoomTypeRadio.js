import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RoomTypeRadio(props) {
  const classes = useStyles();
  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Range</FormLabel>
        <RadioGroup value={props.value} onChange={props.handleChange}>
          <FormControlLabel value="ANY_ROOM" control={<Radio color="primary"/>} label="Any Room" />
          <FormControlLabel value="CLASSROOM" control={<Radio color="primary" />} label="Classroom" />
          <FormControlLabel value="LECTURE_THEATRE" control={<Radio color="primary" />} label="Lecture Theatre" />
          <FormControlLabel value="DEPARTMENTAL_ROOM" control={<Radio color="primary" />} label="Departmental Room" />
          <FormControlLabel value="DEPARTMENTAL_LAB" control={<Radio color="primary" />} label="Departmental Lab" />
          <FormControlLabel value="ACTIVE_LEARNING_CLASSROOM" control={<Radio color="primary" />} label="Active Learning Classroom" />
          <FormControlLabel value="TESTING_CENTRE" control={<Radio color="primary" />} label="Testing Centre" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}