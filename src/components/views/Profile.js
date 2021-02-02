import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";

const user = {
  avatar: "/images/avatar_1.png",
  name: "Admin",
  timezone: "GTM-7",
};

const useStyles = makeStyles(() => ({
  root: {
    marginBottom:10,
  },
  avatar: {
    height: 70,
    width: 70,
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography color="textPrimary" gutterBottom variant="">
            {user.name}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
