import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dataList: [],
  firstNameTerms: "",
  middleNameTerms: "",
  lastNameTerms: "",
  dob: "",
  mob: "",
  email: "",
  identity: null,
};

const nameSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    changeFirstName(state, action) {
      state.firstNameTerms = action.payload;
    },
    changeMiddleName(state, action) {
      state.middleNameTerms = action.payload;
    },
    changeLastName(state, action) {
      state.lastNameTerms = action.payload;
    },
    changeDOB(state, action) {
      state.dob = action.payload;
    },
    changeMob(state, action) {
      state.mob = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeIdentity(state, action) {
      state.identity = action.payload;
    },
  },
});

export const {
  changeFirstName,
  changeMiddleName,
  changeLastName,
  changeDOB,
  changeMob,
  changeEmail,
  changeIdentity,
} = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
