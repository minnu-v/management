import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchHandler from "utils/fetchHandler";

export const LeaveRequest = createAsyncThunk("request/get", async (body) => {
	const fetchOptions = {
		url: `/view/pendingLeavelist`,
		method: "GET",
		secure: true,
	};
	const responce = await fetchHandler(fetchOptions);
	return await responce;
});

export const Approved = createAsyncThunk("request/get", async (body) => {
	const fetchOptions = {
		url: `/view/approvedList`,
		method: "GET",
		secure: true,
	};
	const responce = await fetchHandler(fetchOptions);
	return await responce;
});


export const ChangeLeaveStatus = createAsyncThunk("request/get", async (body) => {
	const fetchOptions = {
		url: `/view/leave/:id`,
		method: "GET",
		secure: true,
	};
	const responce = await fetchHandler(fetchOptions);
	return await responce;
});




