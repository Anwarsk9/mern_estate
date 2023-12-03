import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInError, signInStart, signInSuccess } = userSlice.actions;

export default userSlice.reducer;
