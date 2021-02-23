/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmpInfo from './EmpInfo';
import JobInfo from './JobInfo';
import Uploads from './Uploads';
import EmergencyInfo from './EmergencyInfo';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  RefreshIcon: {
    marginRight: theme.spacing(1),
    textAlign:'right'
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
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
    left: '38vh',
  }
}));

const steps = ['Employee Information', 'Job Details', 'Emergency contact', 'Uploads'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EmpInfo />;
    case 1:
      return <JobInfo />;
    case 2:
      return <EmergencyInfo />;
    case 3:
      return <Uploads />;
    default:
      throw new Error('Unknown step');
  }
}

export default function AllInfo() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const goTo = () => {
    location.href='allinfo';
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
                <Typography variant="h6" gutterBottom style={{color:"green", fontStyle:"italic", alignItems:"center", justifyContent:"center"}}>
                The employee details added succesfully !
                </Typography>
                <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonEnd}
        onClick={goTo}
      >
        New Employee
      </Button>
    </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
       
      </main>
    </React.Fragment>
  );
}