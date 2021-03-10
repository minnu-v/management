import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchHandler from "utils/fetchHandler";

export const LoginCredentials = createAsyncThunk("auth/login", async (body) => {
	const fetchOptions = {
		url: `https://jsonplaceholder.typicode.com/todos/1`,
		method: "GET",
		secure: false,
		body: JSON.stringify(body),
	};

	const responce = await fetchHandler(fetchOptions);
	return await responce;
});