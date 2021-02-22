import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

const DetailView = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    empid: "",
    phone: "",
    qualification: "",
    emergencycontact: "",
    country: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Employee ID"
                name="empid"
                onChange={handleChange}
                required
                value={values.empid}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="phone number"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Qualification"
                name="qualification"
                onChange={handleChange}
                required
                value={values.qualification}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Emergency contact"
                name="emergencycontact"
                onChange={handleChange}
                required
                value={values.emergencycontact}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Account number"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="IFS code"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Designation"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Date Of joining"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Date of birth"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Blood Group"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="standard"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

DetailView.propTypes = {
  className: PropTypes.string,
};

export default DetailView;
