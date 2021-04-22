/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Emp from "../statusOfEmployee/Emp";
import Job from "../statusOfEmployee/Job";
import Uploads from "../addEmployee/Uploads";
import Emergency from "../statusOfEmployee/Emergency";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  RefreshIcon: {
    marginRight: theme.spacing(1),
    textAlign: "right",
  },
  paper: {
    padding: theme.spacing(4),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(5),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  buttonEnd: {
    marginTop: theme.spacing(2),
    borderRadius: "25px",
  },
  buttonAlign: {
    left: "38vh",
  },
}));

const steps = [
  "Employee Information",
  "Job Details",
  "Emergency contact",
  "Uploads",
];

function getStepContent(step, handleNext, handleBack) {
  switch (step) {
    case 0:
      return <Emp handleNext={handleNext}/>;
    case 1:
      return <Job handleNext={handleNext} handleBack={handleBack}/>;
    case 2:
      return <Emergency handleNext={handleNext} handleBack={handleBack}/>;
    case 3:
      return <Uploads handleNext={handleNext} handleBack={handleBack}/>;
    default:
      throw new Error("Unknown step");
  }
}

export default function DetailView() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const goTo = () => {
    location.href = "employeelist";
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Employee Registration
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    color: "green",
                    fontStyle: "bold",
                    fontFamily: "-apple-system",
                  }}
                >
                  Employee details added successfully !
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonEnd}
                    onClick={goTo}
                  >
                    Back to List
                  </Button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, handleNext, handleBack)}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
