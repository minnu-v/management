import React from "react";
import { Avatar, Button, CssBaseline, Grid } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#1769aa",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: theme.spacing(25),
    backgroundColor: "#1769aa",
  },
  mainWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  subContent: {
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = async (value) => {
    const { email } = value;
    if (email === "admin@gmail.com") {
      //await localStorage.setItem("isLogin", true);
      history.push("/");
    }
  };

  return (
    <Container component="main" className={classes.mainWrapper}>
      <CssBaseline />
      <Grid className={classes.paper} xs={4}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Forgot your password?</Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.subContent}
        >
          Enter the email address associated with your account. We will email
          you a link to reset your password.
        </Typography>
        <Formik
          initialValues={{
            email: "",
          }}
          enableReinitialize={true}
          validationSchema={ValidationSchema}
          onSubmit={async (values) => {
            // same shape as initial values
            handleSubmit(values);
          }}
        >
          {({ values }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Enter Email Address"
                name="email"
                disable="false"
              />

              <Box display="flex">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Reset Password
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Grid>
    </Container>
  );
}
