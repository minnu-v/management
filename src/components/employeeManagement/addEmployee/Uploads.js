import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import BackupIcon from "@material-ui/icons/Backup";
import { makeStyles, Button } from "@material-ui/core";
import Dropzone from "react-dropzone";

const useStyles = makeStyles((theme) => ({
  app: {
    padding: "10px 20px ",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fileName: {
    paddingTop: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Upload({ handleNext, handleBack }) {
  const classes = useStyles();
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <div className={classes.app}>
      <Dropzone
        className={classes.drop}
        onDrop={handleDrop}
        minSize={1024}
        maxSize={3072000}
      >
        {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <Fab
                className={classes.fabIcons}
                variant="extended"
                size="small"
                color="primary"
              >
                <BackupIcon className={classes.extendedIcon} />
                upload
              </Fab>
            </div>
          );
        }}
      </Dropzone>
      <div className={classes.fileName}>
        <strong>Files:</strong>
        <ul className={classes.alignment}>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
        <div className={classes.buttons}>   
        <Button onClick={handleBack} className={classes.button}>
          Back
        </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                   Submit
                  </Button>
                </div>
      </div>
    </div>
    
  );
}
