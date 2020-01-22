import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  return (
    <div>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Buildings</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={props.value}
            onChange={props.handleChange}
            >
            <MenuItem value={"JHE"}>JHE</MenuItem>
            <MenuItem value={"T13"}>T13</MenuItem>
            </Select>
      </FormControl>
    </div>
  );
}