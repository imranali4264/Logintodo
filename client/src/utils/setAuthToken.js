import axois from "axios";

const setAuthToken = token => {
  if (token) {
    axois.defaults.headers.common["Authorization"] = token;
  } else {
    delete axois.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
