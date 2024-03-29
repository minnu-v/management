import { createSlice } from "@reduxjs/toolkit";
import {
  LeaveRequest,
  Approved,
  Rejected,
  EmployeeList,
  ChangeLeaveStatus,
  Job,
  Personal,
  Emergency,
} from "store/action";

export const requestReducer = createSlice({
  name: "request",
  initialState: {
    loading: "idle",
    product: [],
    error: null,

  },
  extraReducers: {
    [LeaveRequest.pending]: (state) => {
      state.loading = "pending";
    },
    [LeaveRequest.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [LeaveRequest.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [Approved.pending]: (state) => {
      state.loading = "pending";
    },
    [Approved.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [Approved.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [Rejected.pending]: (state) => {
      state.loading = "pending";
    },
    [Rejected.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [Rejected.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [ChangeLeaveStatus.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [ChangeLeaveStatus.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [ChangeLeaveStatus.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [EmployeeList.pending]: (state) => {
      state.loading = "pending";
    },
    [EmployeeList.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [EmployeeList.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [Job.pending]: (state) => {
      state.loading = "pending";
    },
    [Job.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [Job.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [Personal.pending]: (state) => {
      state.loading = "pending";
    },
    [Personal.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [Personal.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
    [Emergency.pending]: (state) => {
      state.loading = "pending";
    },
    [Emergency.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = "idle";
      state.product = payload;
    },
    [Emergency.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
  },
});
export default requestReducer.reducer;
