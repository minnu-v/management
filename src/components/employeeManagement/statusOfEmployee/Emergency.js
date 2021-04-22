import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Emergency, EmergencyEdit } from "store/action";
import { useLocation } from "react-router-dom";

const EmergencySchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  phone: Yup.string()
    .required("Required")
    .max(10, "Exceed 10 digits!")
    .min(10, "Must have 10 digits!"),
  tags: Yup.string().required("Required"),
  address1: Yup.string().required("Required"),
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

export default function EmergencyInfo({ handleNext, handleBack }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const query = useQuery();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const InitialFields = {
    name: status?.data?.fullName ?? "",
    phone: status?.data?.phNo ?? "",
    tags: status?.data?.relation ?? "",
    address1: status?.data?.address1 ?? "",
    address2: status?.data?.address2 ?? "",
  };

  useEffect(() => {
    const id = query.get("leaveId");
    dispatch(Emergency(id)).then((res) => {
      setStatus(res?.payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (value) => {
    console.log(value);
    const id = query.get("leaveId");
    dispatch(EmergencyEdit(id)).then((res) => {});
    // handleEdit();
  };

  return (
    <Formik
      initialValues={InitialFields}
      validationSchema={EmergencySchema}
      enableReinitialize={true}
      validateOnChange={true}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
    >
      {({ setFieldValue, values }) => (
        <div>
          {console.log("values", values)}
          <Typography variant="h6" gutterBottom>
            Emergency Contact Information
          </Typography>
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Contact name"
                  name="name"
                  value={values.name}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone no."
                  value={values.phone}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Relation</InputLabel>
                  <Select
                    id="relation"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={values.tags}
                    onChange={(e) => setFieldValue("tags", e.target.value)}
                    //onChange={handleChange}
                    name="tags"
                    disabled="true"
                  >
                    <MenuItem disabled value="">
                      <em> relation </em>
                    </MenuItem>
                    <MenuItem value={"Spouse"}>Spouse</MenuItem>
                    <MenuItem value={"Parent"}>Parent</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
                  <ErrorMessage name="tags" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  name="address1"
                  id="address1"
                  label="Address line 1"
                  value={values.address1}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  value={values.address2}
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
