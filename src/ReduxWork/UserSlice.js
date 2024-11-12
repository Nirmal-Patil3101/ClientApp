import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isRegister: false,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isLogin = true;
    },
    registration: (state, action) => {
      state.userData = action.payload;
      state.isRegister = true;
    },
    logout: (state) => {
      state.userData = {};
      state.isLogin = false;
    },
  },
});

export const { registration, login, logout } = userSlice.actions;
export default userSlice.reducer;
