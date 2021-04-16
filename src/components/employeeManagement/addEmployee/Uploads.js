import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddIcon from "@material-ui/icons/Add";
import { Button, makeStyles } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import {Upload} from "store/action"
const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

  export default  function Dropzone({ handleBack, handleNext }, props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const handleSubmission = async (value) => {
    alert("File Uploaded Successully");
    console.log(value);
    const { upload } = value;
    const obj = {
      profileImage: upload,
    };
    dispatch(Upload(obj)).then((res) => {});
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Button
          type="button"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={open}
        >
          Pick Files
        </Button>
      </div>

      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <div>
        <Button
          variant="contained"
          color="primary"
          name="upload"
          startIcon={<CloudUploadIcon />}
          onClick={handleSubmission}
        >
          Upload
        </Button>
      </div>
      <div className={classes.buttons}>
        <Button onClick={handleBack} className={classes.button}>
          Back
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
    </div>
  );
}

<Dropzone />;
