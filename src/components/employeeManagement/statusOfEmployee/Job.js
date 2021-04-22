import React, { useEffect, useState } from "react";
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
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { Job, JobEdit } from "store/action";

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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
  const query = useQuery();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
   
  const InitialFields = {
    designation: status?.data?.designation ?? "",
    jobid: status?.data?.job_id ?? "",
    salary: status?.data?.salary ?? "",
    accno: status?.data?.accno ?? "",
    ifsc: status?.data?.ifsc ?? "",
    doj: status?.data?.doj ?? "",
    email: status?.data?.email ?? "",
    password: status?.data?.password ?? "",
    confirmpassword: status?.data?.confirmpassword ?? "",
  };

  useEffect(() => {
    const id = query.get("jobid");
    
    dispatch(Job(id)).then((res) => {
      setStatus(res?.payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (value) => {
    console.log(value);
    const id = query.get("jobid");
    
    dispatch(JobEdit(id)).then((res) => {});
    // handleEdit();
  };
  

  return (
    <Formik
      initialValues={InitialFields}
      validationSchema={JobSchema}
      enableReinitialize={true}
      validateOnChange={true}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
    >
      {(values) => (
        <div>
          {console.log("values", values)}
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
                  name="designation"
                  value={values.designation}
                  label="Designation"
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
                  value={values.empid}
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
                  value={values.salary}
                  label="Salary $"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="accno"
                  id="acc no."
                  value={values.accno}
                  label="Account number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="ifsc"
                  id="IFSC"
                  value={values.ifsc}
                  label="IFS Code"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="doj"
                  id="doj"
                  value={values.doj}
                  label="Date Of Joining"
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
                  value={values.email}
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
                  value={values.password}
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
                  value={values.confirmpassword}
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => handleConfirmPassword()}>
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
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
                type="submit"
                variant="contained"
                color="primary"
                // onClick={handleEdit}
                className={classes.button}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleNext}
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
