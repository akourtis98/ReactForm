import axios from "axios";

import { LOADING, GET_USERS, GET_ERRORS } from "./types";

// Get users
export const getUsers = () => dispatch => {
  setLoading();
  axios
    .get("http://localhost:5000/routes/users/get")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Register User
export const addUser = (data, history) => dispatch => {
  // Object.keys(data).map(key => {
  //   console.log(key + ": " + data[key]);
  // });
  console.log("USERNAME: " + data.username);
  axios
    .post("http://localhost:5000/routes/users/add", data)
    .then(res => history.push("/users"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// loading
export const setLoading = () => dispatch => {
  dispatch({
    type: LOADING
  });
};
