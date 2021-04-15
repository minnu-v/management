import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Link from "@material-ui/core/Link";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeList } from "store/action/requestAction";
import { Switch, FormControlLabel } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const StatusSwitch = withStyles({
  switchBase: {
    color: red[600],
    "&$checked": {
      color: green[600],
    },
    "&$checked + $track": {
      backgroundColor: green[600],
    },
  },
  checked: {},
  track: {},
})(Switch);

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
  const listing = useSelector((state) => state.request?.product);

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    dispatch(EmployeeList()).then((res) => {});
  }, [dispatch]);
  console.log(listing);
  return (
    <div className={classes.box}>
      <Paper className={classes.wrapper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              {/* <StyledTableCell align="right">EmpId</StyledTableCell> */}
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">More</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listing?.data?.map((row, i) => (
              <StyledTableRow key={row.EmployeeID}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.tdStyle}>
                  {i + 1}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.description}</StyledTableCell> */}
                <StyledTableCell align="right">
                  {row.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <FormControlLabel
                    control={
                      <StatusSwitch
                        onChange={handleChange}
                        name="checkedA"
                      />
                    }
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link href="detailview">View more</Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}