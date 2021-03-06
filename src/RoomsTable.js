import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function RoomsTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>Room Number</TableCell>
                <TableCell align="right">Capacity</TableCell>
                <TableCell align="right">Room Type</TableCell>
                <TableCell align="right">Occupied</TableCell>
                <TableCell align="right">Light Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rooms.map(room => (
                <TableRow hover role="checkbox" tabIndex={-1} key={room.number}>
                    <TableCell component="th" scope="row">
                        {room.RoomNumber}
                    </TableCell>
                    <TableCell align="right">{room.Capacity}</TableCell>
                    <TableCell align="right">{room.RoomType}</TableCell>
                    <TableCell align="right">
                      {room.Timestamp && moment(room.Timestamp).add(5, 'm').isAfter(moment()) && (
                        <CheckIcon style={{color: 'green'}} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {room.Light}
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default RoomsTable;