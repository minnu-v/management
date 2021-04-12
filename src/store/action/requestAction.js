import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchHandler from "utils/fetchHandler";

export const LeaveRequest = createAsyncThunk("request/get", async (body) => {
	const fetchOptions = {
		url: `/view/pendingLeaveList`,
		method: "GET",
		secure: true,
	};
	const responce = await fetchHandler(fetchOptions);
	return await responce;
});






