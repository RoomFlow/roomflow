import React from 'react';
import './TopNav.css';
import Grid from '@material-ui/core/Grid';
import MultipleSelect from './MultiDropdown'
import SvgIcon from '@material-ui/core/SvgIcon';
import SimplePopover from './SimplePopover'
import DiscreteSlider from './Occupants'
import CheckboxLabels from './RoomType'
import { Link, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
  
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
export default function TopNav() { 
    return (
        <div className="padding10">
            <Grid container direction="row" justify="left" alignItems="center" spacing={3}> 
                <Grid item>
                    <Link href="/">
                        <HomeIcon fontSize="large" />
                    </Link>
                </Grid>
                <Grid item>
                    <MultipleSelect></MultipleSelect>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="left" alignItems="center" spacing={2}> 
                <Grid item>
                    <SimplePopover title="Occupants">
                        <DiscreteSlider></DiscreteSlider>
                    </SimplePopover>
                </Grid>
                <Grid item>
                    <SimplePopover title="Type">
                        <CheckboxLabels></CheckboxLabels>
                    </SimplePopover>
                </Grid>
                <Grid item>
                    <FormControlLabel
                    value="end"
                    control={<Switch color="primary" />}
                    label="Currently Available"
                    labelPlacement="end"
                    />
                </Grid>
                    <FormControlLabel
                    value="end"
                    control={<Switch color="primary" />}
                    label="Windows"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="end"
                    control={<Switch color="primary" />}
                    label="Wheelchair Accessible"
                    labelPlacement="end"
                    />
                <Grid item>
                    <Button variant="contained" color="secondary">
                    Search Now!
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}