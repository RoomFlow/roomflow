import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup column>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="Individual Room"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedB} onChange={handleChange('checkedA')} value="checkedB" />
        }
        label="Group Study"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedC} onChange={handleChange('checkedA')} value="checkedC" />
        }
        label="Interview"
      />
    </FormGroup>
  );
}