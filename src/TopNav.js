import React from 'react';
import './TopNav.css';
import Grid from '@material-ui/core/Grid';
import MultipleSelect from './MultiDropdown'
import SvgIcon from '@material-ui/core/SvgIcon';
import SimplePopover from './SimplePopover'
import DiscreteSlider from './Occupants'
  
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
                    <HomeIcon fontSize="large" />
                </Grid>
                <Grid item>
                    <MultipleSelect></MultipleSelect>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="left" alignItems="center" spacing={2}> 
                <Grid item>
                    <SimplePopover title="Occupants"></SimplePopover>
                </Grid>
                <Grid item>
                    <SimplePopover title="Type"></SimplePopover>
                </Grid>
                <Grid item>
                    <DiscreteSlider></DiscreteSlider>
                </Grid>
            </Grid>
        </div>
    );
}