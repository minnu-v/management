// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Personal, PersonalEdit } from "store/action";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const EmployeeSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  name1: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  phone2: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  bloodgroup: Yup.string().required("Required"),
  relation: Yup.string().required("Required"),
  address1: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
  landmark: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  tags: Yup.string().required("Required"),
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
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
    marginTop: theme.spacing(2),
  },
}));

export default function EmpInfo({ handleNext }) {
  const classes = useStyles();
  const query = useQuery();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openOne, setOpenOne] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseOne = () => {
    setOpenOne(false);
  };
  const handleOpenOne = () => {
    setOpenOne(true);
  };

  const InitialFields = {
    email: status?.data?.personalEmail ?? "",
    name: status?.data?.firstName ?? "",
    name1: status?.data?.lastName ?? "",
    gender: status?.data?.gender ?? "",
    dob: status?.data?.dob ?? "",
    bloodgroup: status?.data?.bloodGroup ?? "",
    tags: status?.data?.maritalStatus ?? "",
    relation: status?.data?.fatherSpouseName ?? "",
    phone: status?.data?.phNo1 ?? "",
    phone2: status?.data?.phNo2 ?? "",
    zip: status?.data?.pincode ?? "",
    address1: status?.data?.address1 ?? "",
    address2: status?.data?.address2 ?? "",
    landmark: status?.data?.landmark ?? "",
    city: status?.data?.city ?? "",
    state: status?.data?.state ?? "",
    country: status?.data?.country ?? "",
  };

  useEffect(() => {
    const id = query.get("emp_id");
    dispatch(Personal(id)).then((res) => {
      setStatus(res?.payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (value) => {
    console.log(value);
    const id = query.get("emp_id");
    dispatch(PersonalEdit(id)).then((res) => {});
    // handleEdit();
  };

  return (
    <Formik
      initialValues={InitialFields}
      validationSchema={EmployeeSchema}
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
            Employee Registration
          </Typography>
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="name"
                  value={values.name}
                  name="name"
                  label="First name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="name1"
                  value={values.name1}
                  name="name1"
                  disable="false"
                  label="Last name"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="date"
                  value={values.dob}
                  name="dob"
                  label="Date Of Birth"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="email"
                  value={values.email}
                  name="email"
                  label="Personal Mail ID"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    id="gender"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={values.gender}
                    disabled="true"
                    onChange={(e) => setFieldValue("gender", e.target.value)}
                    //onChange={handleChange}
                  >
                    <MenuItem disabled value="">
                      <em> gender </em>
                    </MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Transgender"}>Transgender</MenuItem>
                  </Select>
                  <ErrorMessage name="gender" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="bloodgroup"
                  value={values.bloodgroup}
                  name="bloodgroup"
                  label="Blood Group"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Marital status</InputLabel>
                  <Select
                    id="maritalstatus"
                    open={openOne}
                    onClose={handleCloseOne}
                    onOpen={handleOpenOne}
                    value={values.tags}
                    onChange={(e) => setFieldValue("tags", e.target.value)}
                    name="tags"
                    disabled="true"
                  >
                    <MenuItem disabled value="">
                      <em> Marital status</em>
                    </MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                    <MenuItem value={"Un-married"}>Un-married</MenuItem>
                  </Select>
                  <ErrorMessage name="tags" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="relation"
                  value={values.relation}
                  name="relation"
                  label="Father/Spouse 's name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="phone"
                  value={values.phone}
                  name="phone"
                  label="Phone number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="phone2"
                  value={values.phone2}
                  name="phone2"
                  label="Alternate number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="address1"
                  value={values.address1}
                  name="address1"
                  label="Address Line 1"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="address2"
                  value={values.address2}
                  name="address2"
                  label="Address Line 2"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="landmark"
                  value={values.landmark}
                  name="landmark"
                  label="Landmark"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="country"
                  value={values.country}
                  name="country"
                  label="Country"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="state"
                  value={values.state}
                  name="state"
                  label="State"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="city"
                  value={values.city}
                  name="city"
                  label="City"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="zip"
                  value={values.zip}
                  name="zip"
                  label="Zip code"
                />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
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
                type="submit"
                variant="contained"
                color="primary"
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
