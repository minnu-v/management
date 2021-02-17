import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const user = {
  avatar: "/images/Radical-Logo-Final-2021-v2.jpg",
};
const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: 0,
    height: 50,
    width: 200,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: blue,
    },
  },
  input: {
    display: "none",
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
        <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button color="primary" component="span">
          <Avatar className={classes.avatar} src={user.avatar} />
          </Button>
        </label>
          </div>
        </Box>
      </CardContent>  
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
