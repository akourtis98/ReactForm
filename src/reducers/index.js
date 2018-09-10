import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  users: usersReducer,
  errors: errorReducer
});
