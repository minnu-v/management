import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default function JobInfo() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Job Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField required id="designation" label="Designation" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField required id="employee id" label="Employee id" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField required id="salary" label="Salary $" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="acc no." label="Account number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="IFSC" label="IFS Code" fullWidth  />
        </Grid>
        <Grid item xs={12} md={6}>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Date Of Joining*"
              fullWidth
              type="date"
              defaultValue="2017-01-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="E-mail" label="Officail mail id" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="password" label="Password" fullWidth/>
      </Grid>
      <Grid item xs={12} md={6}>
          <TextField required id="confirmPassword" label="Confirm Password" fullWidth/>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}
