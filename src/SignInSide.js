import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import SimpleSelect from './SimpleSelect'
import SimplePopover from './SimplePopover'
import RadioButtonsGroup from './OccupantsList'
import RoomTypeRadio from './RoomTypeRadio'
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInSide(props) {
  const classes = useStyles();

  const handleSearchClick = event => {
    event.preventDefault();
    props.search();
    props.history.push('/results');
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Search Now
          </Typography>
          <form className={classes.form} noValidate>
            {/* <MultipleSelect onChange={props.updateFilter('building')} value={props.filterData.building}></MultipleSelect> */}
            <SimpleSelect handleChange={props.updateFilter('building')} value={props.filterData.building}/>
            <FormControlLabel
              value="end"
              control={<Switch color="primary" />}
              label="Currently Available"
              labelPlacement="end"
            />
            {/* checked={props.filter.windows} 
            checked={props.filter.wheelchair}*/}
            <FormControlLabel
              control={<Switch color="primary" onChange={props.toggleFilter('windows')} />}
              label="Windows"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Switch color="primary" onChange={props.toggleFilter('wheelchair')} />}
              label="Wheelchair Accessible"
              labelPlacement="end"
            />
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}> 
              <Grid item>
                <SimplePopover title="Occupants">
                  <RadioButtonsGroup 
                  handleChange={props.updateCapacityComparison} 
                  value={props.filterData.capacity.comparison}
                  handleSizeChange={props.updateCapacitySize} 
                  sizeValue={props.filterData.capacity.size}
                  />
                </SimplePopover>
              </Grid>
              <Grid item>
                <SimplePopover title="Type of Room">
                <RoomTypeRadio
                handleChange={props.updateFilter('roomType')}
                value={props.filterData.roomType}
                />
                </SimplePopover>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleSearchClick}
            >
              Search
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignInSide);