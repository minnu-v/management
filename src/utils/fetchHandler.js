import axios from "axios";

const rootURL = process.env.REACT_APP_ROOT_URL;
//const LSVariable = process.env.REACT_APP_LS_VAR;

const fetchHandler = ({
  url,
  method = "GET",
  body,
  secure = false,
  fileUpload = false,
}) => {
  const accessToken = localStorage.getItem("adminToken");

  const headersData = {
    Accept: fileUpload ? "multipart/form-data" : "application/json",
    "Content-Type": fileUpload ? "multipart/form-data" : "application/json",
    ...(secure && { adminToken: `${accessToken}` }),
  };

  return axios({
    method: method,
    url: `${rootURL}${url}`,
    headers: {
      ...headersData,
    },
    ...(method !== "GET" && { data: body }),
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};
export default fetchHandler;
