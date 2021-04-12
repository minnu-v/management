import { createSlice } from "@reduxjs/toolkit";
import { LeaveRequest, Approved, EmployeeList, ChangeLeaveStatus} from "store/action";

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
	},
});
export default requestReducer.reducer;
