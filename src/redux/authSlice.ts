import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { userName: "", userEmail: "" },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = { userName: "", userEmail: "" };
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
