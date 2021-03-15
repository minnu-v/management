import React, { useState } from "react";
import { Avatar, Button, CssBaseline, Grid, Link} from "@material-ui/core";
import { useDispatch } from 'react-redux'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Snackbar from "@material-ui/core/Snackbar";
import {LoginCredentials} from "store/action";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Too Short!")
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
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (value) => {
    const { email, password } = value;

    const obj ={
      email:email,
      password:password
    }

    dispatch(LoginCredentials(obj)).then((res)=> {
      if(res.payload.token){
        localStorage.setItem("isLogin", true);
        localStorage.setItem("token",res.payload.token)
        history.push("/dashboard");
      }
      else {
        setToast(true);
      }
    })
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
          enableReinitialize={true}
          validationSchema={SignupSchema}
          onSubmit={async(values) => {
            // same shape as initial values
            handleSubmit(values);
          }}
        >
          {({ values }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                variant="standard"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                disable="false"
              />

              <Field
                component={TextField}
                variant="standard"
                margin="normal"
                fullWidth
                id="password"
                name="password"
                disable="false"
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
                  <Link href="forgotpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
      
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={toast}
        onClose={() => setToast(false)}
        message="Invalid credentials"
      />
    </Container>
  );
}
