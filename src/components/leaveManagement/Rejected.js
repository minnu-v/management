import React, { useEffect , useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from "react-redux";
import { Rejected } from 'store/action/requestAction';

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "#ad40bf",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {},
}))(TableRow);

const useStyles = makeStyles({
  wrapper: {
    padding: 40,
  },
  table: {
    minWidth: 700,
  },
  tdStyle: {
    padding: 25,
  },
  box: {
    border: "1px solid lightgrey",
    padding: 25,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const dispatch = useDispatch(); 
  const [rejectlist, setRejectlist] = useState([])
  
  useEffect(() => {
    dispatch(Rejected()).then((res) => {
      setRejectlist(res.payload)
    });
  },[dispatch])
  console.log(rejectlist)

  return (
    <div className={classes.box}>
    <Paper className={classes.wrapper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead> 
          <TableRow>
          <StyledTableCell>No</StyledTableCell>
            {/* <StyledTableCell align="right">EmpId</StyledTableCell> */}
            <StyledTableCell align="right">From Date</StyledTableCell>
            <StyledTableCell align="right">To Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Leave Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rejectlist && rejectlist?.data?.map((row,i) => (
            <StyledTableRow key={row.EmployeeID}  >
              <StyledTableCell component="th" scope="row" className={classes.tdStyle}>
                {i+1}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.description}</StyledTableCell> */}
              <StyledTableCell align="right">{row.from_date}</StyledTableCell>
              <StyledTableCell align="right">{row.to_date}</StyledTableCell>
              <StyledTableCell align="right">{row.leave_status}</StyledTableCell>
              <StyledTableCell align="right">{row.leave_type}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}
