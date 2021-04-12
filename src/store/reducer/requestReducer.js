import { createSlice } from "@reduxjs/toolkit";
import { LeaveRequest } from "store/action";

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
	},
});

export default requestReducer.reducer;
