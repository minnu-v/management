import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { green, red } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
  export default function CustomizedTables() {
    const [state, setState] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
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
 
  function createData(EmployeeID, Name, Status, More) {
    return { EmployeeID, Name, Status, More };
  }

  const rows = [
    createData(
      1,
      "Akhila",
      <FormControlLabel
        control={
          <StatusSwitch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
      />,
      <Link to="detailview">View more</Link>
    ),
    createData(
      2,
      "Aneena",
      <FormControlLabel
        control={
          <StatusSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
      />,
      <Link to="detailview">View more</Link>
    ),
    createData(
      3,
      "Archit",
      <FormControlLabel
        control={
          <StatusSwitch
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
          />
        }
      />,
      <Link to="detailview">View more</Link>
    ),
    createData(
      4,
      "Minnu",
      <FormControlLabel
        control={
          <StatusSwitch
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
          />
        }
      />,
      <Link to="detailview">View more</Link>
    ),
  ];

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

  const classes = useStyles();

  return (
    <div className={classes.box}>
      <Paper className={classes.wrapper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>EMPLOYEE ID</StyledTableCell>
              <StyledTableCell align="right">NAME</StyledTableCell>
              <StyledTableCell align="right">STATUS</StyledTableCell>
              <StyledTableCell align="right">MORE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.EmployeeID}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.tdStyle}
                >
                  {row.EmployeeID}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Name}</StyledTableCell>
                <StyledTableCell align="right"> {row.Status}</StyledTableCell>
                <StyledTableCell align="right">{row.More}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
