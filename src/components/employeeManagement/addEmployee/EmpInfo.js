import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl:{
    minWidth: "100%"
  },
}));
export default function EmpInfo() {
  const classes = useStyles();
  const [Gender, setGender] = React.useState('');
  const [Maritalstatus, setstatus] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openOne, setOpenOne] = React.useState(false);

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleChangeOne = (event) => {
    setstatus(event.target.value);
  };

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

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Employee Registration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} md={4}>
        <form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Date Of Birth"
    type="date"
    fullWidth
    defaultValue="1998-01-01"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="personalMail"
            name="personalMail"
            label="Mail id"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
      
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          fullWidth
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Gender}
          onChange={handleChange}
        >
          <MenuItem disabled value="">
            <em> gender </em>
          </MenuItem>
          <MenuItem value={1}>Female</MenuItem>
          <MenuItem value={2}>Male</MenuItem>
          <MenuItem value={3}>Transgender</MenuItem>
        </Select>
      </FormControl>
  
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="bloodGroup"
            name="bloodGroup"
            label="Blood group"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Marital status
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openOne}
                      onClose={handleCloseOne}
                      onOpen={handleOpenOne}
                      value={Maritalstatus}
                      onChange={handleChangeOne}
                    >
                      <MenuItem disabled value="">
                        <em> Marital  status</em>
                      </MenuItem>
                      <MenuItem value={3}>Married</MenuItem>
                      <MenuItem value={4}>Un-married</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="relation"
            name="relation"
            label="Father/Spouse Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone no."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="phone2"
            name="phone2"
            label="Alternate no."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="employee registartion-line1"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="employee registartion-line2"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="landmark"
            name="landmark"
            label="Land mark"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField id="state" required name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}