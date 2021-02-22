import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
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
    width: theme.spacing(12),
    backgroundColor: "#1769aa",
  },
  mainWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const handleSubmit = async (value) => {
    const { email, password } = value;
    if (email === "admin@gmail.com" && password === "123456") {
      await localStorage.setItem("isLogin", true);
      history.push("/dashboard");
    }
  };

  return (
    <Container component="main" className={classes.mainWrapper}>
      <CssBaseline />
      <Grid className={classes.paper} xs={4}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            handleSubmit(values);
          }}
        >
          {({ errors, touched, handleBlur, handleChange, values }) => (
            <Form className={classes.form}>
              <TextField
              required
                variant="standard"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
              required
                variant="standard"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Box display="flex">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </Box>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color="#1769aa">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Container>
  );
}
