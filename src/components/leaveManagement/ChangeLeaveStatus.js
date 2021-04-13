import React from "react";
import { TextField } from "formik-material-ui";
import { useDispatch } from "react-redux";
import { ChangeLeaveStatus } from "store/action";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  CssBaseline,
  Container,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";

const ApplyLeaveSchema = Yup.object().shape({
  leaveType: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  fromDate: Yup.string().required("Required"),
  toDate: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const useStyles = makeStyles((theme) => ({
  margin: {
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(5),
    color: "#FFFFFF",
    backgroundColor: "#008B02",
  },

  red: {
    marginTop: theme.spacing(5),
    color: "#FFFFFF",
    backgroundColor: "#B80000",
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(0.1),
    minWidth: "100%",
  },
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  cardAlign: {
    // marginLeft: "5%",
    marginTop: "5%",
  },

  cardAbbre: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    color: "#3F51B5",
    marginBottom: theme.spacing(2),
  },

  submit: {
    margin: theme.spacing(1),
  },

  Button: {
    textAlign: "center",
  },
}));

const tiers = [
  {
    title: "Casual Leave",
    abbre: "CL",
    description: ["Available:12", "Taken : 0"],
  },
  {
    title: "Sick Leave",
    abbre: "SL",
    description: ["Available:6", "Taken : 0"],
  },
  {
    title: "Maternity Leave",
    abbre: "ML",
    description: ["Available:84", "Taken : 0"],
  },
];

export default function Request() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (value) => {
    console.log(value);
    const { leaveType, description, fromDate, toDate, duration } = value;
    const obj = {
      leave_type: leaveType,
      description: description,
      from_date: fromDate,
      to_date: toDate,
      duration: duration,
    };
    dispatch(ChangeLeaveStatus(obj)).then((res) => {});
  };

  return (
    <Formik
      initialValues={{
        leaveType: "",
        duration: "",
        fromDate: "",
        toDate: "",
        description: "",
      }}
      validationSchema={ApplyLeaveSchema}
      enableReinitialize={true}
      validateOnChange={true}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
    >
      {({ values }) => (
        <div>
          {console.log("values", values)}
          <div>
            <CssBaseline />
            <Container maxWidth="md" component="main">
              <Grid container spacing={4} className={classes.cardAlign}>
                {tiers.map((tier) => (
                  <Grid
                    item
                    key={tier.title}
                    xs={6}
                    sm={tier.title === "casualLeave" ? 12 : 6}
                    md={4}
                  >
                    <Card>
                      <CardHeader
                        title={tier.title}
                        subheader={tier.subheader}
                        titleTypographyProps={{ align: "center" }}
                        subheaderTypographyProps={{ align: "center" }}
                      />
                      <CardContent>
                        <div className={classes.cardAbbre}>
                          <Typography component="h2" variant="h3">
                            {tier.abbre}
                          </Typography>
                        </div>
                        <ul>
                          {tier.description.map((line) => (
                            <Typography
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
                              {line}
                            </Typography>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>

          <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Leave Details
              </Typography>

              <Form className={classes.form} validate>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="leavetype"
                      label="Leave Type"
                      name="leavetype"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="durartion"
                      label="Duration"
                      name="duration"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="from_date"
                      label="From Date"
                      name="fromDate"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="to_date"
                      label="To Date"
                      name="toDate"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="description"
                      label="Reason for leave"
                      name="description"
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" className={classes.margin}>
                  Approve
                </Button>

                <Button variant="contained" className={classes.red}>
                  REJECT
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      )}
    </Formik>
  );
}
