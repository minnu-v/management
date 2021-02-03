import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(EmployeeID, Name, Status, More) {
  return { EmployeeID, Name, Status, More };
}

const rows = [
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  
];

const useStyles = makeStyles({
  wrapper:{
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:30,
    paddingTop:20,
  },
  table: {
    minWidth: 700,
    border:"1px solid lightgrey",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EmployeeID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">More</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.EmployeeID}>
              <StyledTableCell component="th" scope="row">
                {row.EmployeeID}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              <StyledTableCell align="right">{row.More}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
