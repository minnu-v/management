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
  Chip,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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
    <Chip color="primary" size="small" label="Deactive"></Chip>,
    <Link to="">View more</Link>
  ),
  createData(
    2,
    "Aneena",
    <Chip color="primary" size="small" label="Deactive"></Chip>,
    <Link to="">View more</Link>
  ),
  createData(
    3,
    "Archit",
    <Chip color="primary" size="small" label="Deactive"></Chip>,
    <Link to="">View more</Link>
  ),
  createData(
    4,
    "Minnu",
    <Chip color="primary" size="small" label="Deactive"></Chip>,
    <Link to="">View more</Link>
  ),
  createData('Frozen yoghurt', 159, 6.0,<Link to="detailview">View more</Link>),
  createData('Frozen yoghurt', 159, 6.0,<Link to="detailview">View more</Link>),
  createData('Frozen yoghurt', 159, 6.0,<Link to="detailview">View more</Link>),
  createData('Frozen yoghurt', 159, 6.0,<Link to="detailview">View more</Link>),
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

export default function CustomizedTables() {
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
