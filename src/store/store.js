import { configureStore } from "@reduxjs/toolkit";
import { nameReducer } from "./slices/nameSlice";
import {
  changeFirstName,
  changeMiddleName,
  changeLastName,
  changeDOB,
  changeMob,
  changeEmail,
  changeIdentity,
} from "./slices/nameSlice";

const store = configureStore({
  reducer: {
    names: nameReducer,
  },
});

export default store;
export {
  changeFirstName,
  changeMiddleName,
  changeLastName,
  changeDOB,
  changeMob,
  changeEmail,
  changeIdentity,
};
