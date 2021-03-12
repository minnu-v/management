import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchHandler from "utils/fetchHandler";

export const LoginCredentials = createAsyncThunk("auth/login", async (body) => {
	const fetchOptions = {
		url: `/login`,
		method: "post",
		secure: false,
		body: body,
	};

	const responce = await fetchHandler(fetchOptions);
	return await responce;
});






