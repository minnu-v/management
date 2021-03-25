import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { JobInformation } from "store/action";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const JobSchema = Yup.object().shape({
  designation: Yup.string().required("Required"),
  empid: Yup.string().required("Required"),
  salary: Yup.string().required("Required"),
  accno: Yup.string().required("Required"),
  ifsc: Yup.string().required("Required"),
  doj: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmpassword: Yup.string()
    .required("Required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: theme.spacing(12),
    backgroundColor: "#1769aa",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  formControl: {
    minWidth: "100%",
    marginTop: "16px",
  },
}));

export default function JobInfo({ handleNext, handleBack }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleSubmit = async (value) => {
    console.log(value);
    const {
      designation,
      empid,
      salary,
      accno,
      ifsc,
      doj,
      email,
      password,
      confirmpassword,
    } = value;
    const obj = {
      designation: designation,
      userId: empid,
      salary: salary,
      accountNo: accno,
      ifsc: ifsc,
      doj: doj,
      officialEmail: email,
      password: password,
      confirmpassword: confirmpassword,
    };
    dispatch(JobInformation(obj)).then((res) => {});
    handleNext();
  };

  return (
    <Formik
      initialValues={{
        designation: "",
        empid: "",
        salary: "",
        accno: "",
        ifsc: "",
        doj: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={JobSchema}
      enableReinitialize={true}
      validateOnChange={true}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <div>
          {console.log(formik)}
          <Typography variant="h6" gutterBottom>
            Job Information
          </Typography>
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="designation"
                  label="Designation"
                  name="designation"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="empid"
                  id="employee id"
                  label="Employee id"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="salary"
                  id="salary"
                  label="Salary $"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="date"
                  label="Date Of Joining"
                  name="doj"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="accno"
                  id="acc no."
                  label="Account number"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="ifsc"
                  id="IFSC"
                  label="IFS Code"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="email"
                  id="E-mail"
                  label="Officail mail id"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => handlePassword()}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="confirmpassword"
                  id="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => handleConfirmPassword()}>
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                // onClick={handleNext}
                className={classes.button}
              >
                Save & Next
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
