import { createSlice } from "@reduxjs/toolkit";
// import {
//   Approve,
// } from "store/action";

export const statusReducer = createSlice({
  name: "status",
  initialState: {
    loading: "idle",
    product: [],
    error: null,
//   },
//   extraReducers: {
//     [Approve.pending]: (state) => {
//       state.loading = "pending";
//     },
//     [Approve.fulfilled]: (state, action) => {
//       const { payload } = action;
//       state.loading = "idle";
//       state.product = payload;
//     },
//     [Approve.rejected]: (state, action) => {
//       state.loading = "idle";
//       state.error = action.error;
//     },   
  },
});
export default statusReducer.reducer;
