import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
  head: {
    color:"#ad40bf",
  },
  body: {
    fontSize: 14,
  },  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    
  },
}))(TableRow);

function createData(EmployeeID, Name, Status, More) {
  return { EmployeeID, Name, Status, More };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0,<Link to="">View more</Link>),
  createData('Frozen yoghurt', 159, 6.0,<Link to="">View more</Link>),
  createData('Frozen yoghurt', 159, 6.0,<Link to="">View more</Link>),
  createData('Frozen yoghurt', 159, 6.0,<Link to="">View more</Link>),
];

const useStyles = makeStyles({
  wrapper:{
    padding:40,
  },
  table: {
    minWidth: 700,
  },
  tdStyle: {
    padding:25,
  },
  box:{
    border: "1px solid lightgrey",
    padding:25,
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
    <Paper className={classes.wrapper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead> 
          <TableRow>
            <StyledTableCell >EMPLOYEE ID</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
            <StyledTableCell align="right">MORE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.EmployeeID}  >
              <StyledTableCell component="th" scope="row" className={classes.tdStyle}>
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
    </div>
  );
}
