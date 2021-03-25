import React from "react";
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
import { EmergencyContact } from "store/action";

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
  const dispatch = useDispatch();
 

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = async (value) => {
    console.log(value)
    const { name, phone, tags, address1, address2 } = value;
    const obj = {
      fullName: name,
      phNo: phone,
      relation: tags,
      address1: address1,
      address2: address2,
    };
    dispatch(EmergencyContact(obj)).then((res) => {});
    handleNext();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        tags: "",
        address1: "",
        address2: "",
      }}
      validationSchema={EmergencySchema}
      enableReinitialize={true}
			validateOnChange={true}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
    >
      {({setFieldValue, values}) => (
        <div>
          {console.log("values",values)}
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
                    onChange={e => setFieldValue('tags', e.target.value)}
                    //onChange={handleChange}
                    name="tags"
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
                />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                // onClick={handleNext}
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