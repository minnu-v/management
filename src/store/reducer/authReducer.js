import { createSlice } from "@reduxjs/toolkit";
// import { LoginCredentials } from "store/action"

export const loginReducer = createSlice({
  name: "auth",
  initialState: {
    loading: "idle",
    error: null,
    loginData: [],
    // extraReducers: {
    // 	[LoginCredentials.pending]: (state, action) => {
    // 		state.loading = "pending";
    // 	},
    // 	[LoginCredentials.fulfilled]: (state, action) => {
    // 		state.loading = "idle";
    // 		state.loginData = []
    // 	},
    // 	[LoginCredentials.rejected]: (state, action) => {
    // 		state.loading = "idle";
    // 		state.error = action.error;
    // 	},
    // },
  },
});

export default loginReducer.reducer;
