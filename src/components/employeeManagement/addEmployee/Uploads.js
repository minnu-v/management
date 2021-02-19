import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import BackupIcon from "@material-ui/icons/Backup";
import { makeStyles } from "@material-ui/core/styles";
import Dropzone from "react-dropzone";

const useStyles = makeStyles((theme) => ({
  app: {
    padding: "10px 20px ",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fileName:{
    paddingTop: "20px"
  }
}));

export default function Upload() {
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
        {({
          getRootProps,
          getInputProps,
          isDragAccept,
          isDragReject,
        }) => {
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
      color="primary">
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
      </div>
    </div>
  );
}
