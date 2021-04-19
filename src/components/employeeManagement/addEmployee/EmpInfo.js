// eslint-disable-next-line no-unused-vars
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { PersonalInformation } from "store/action";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
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

  const handleSubmit = async (value) => {
    console.log(value);
    const {
      name,
      name1,
      gender,
      dob,
      bloodgroup,
      tags,
      relation,
      phone,
      phone2,
      zip,
      address1,
      address2,
      email,
      landmark,
      city,
      state,
      country,
    } = value;
    const obj = {
      personalEmail: email,
      firstName: name,
      lastName: name1,
      gender: gender,
      dob: dob,
      bloodGroup: bloodgroup,
      maritalStatus: tags,
      fatherSpouseName: relation,
      phNo1: phone,
      phNo2: phone2,
      pincode: zip,
      address1: address1,
      address2: address2,
      landmark: landmark,
      city: city,
      state: state,
      country: country,
    };
    dispatch(PersonalInformation(obj)).then((res) => {});
    handleNext();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        name1: "",
        email: "",
        phone: "",
        phone2: "",
        dob: "",
        bloodgroup: "",
        gender: "",
        tags: "",
        relation: "",
        address1: "",
        address2: "",
        landmark: "",
        country: "",
        state: "",
        city: "",
        zip: "",
      }}
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
                  label="First name"
                  name="name"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="name1"
                  label="Last name"
                  name="name1"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="date"
                  label="Date Of Birth"
                  name="dob"
                  disable="false"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Personal Mail ID"
                  name="email"
                  disable="false"
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
                  label="Blood Group"
                  name="bloodgroup"
                  disable="false"
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
                  label="Father/Spouse 's name"
                  name="relation"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="phone"
                  label="Phone number"
                  name="phone"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="phone2"
                  label="Alternate number"
                  name="phone2"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="address1"
                  label="Address Line 1"
                  name="address1"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="address2"
                  label="Address Line 2"
                  name="address2"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="landmark"
                  label="Landmark"
                  name="landmark"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  disable="false"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Field
                  component={TextField}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="zip"
                  label="Zip code"
                  name="zip"
                  disable="false"
                />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
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
