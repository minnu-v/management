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

export const EmergencyContact = createAsyncThunk(
  "auth/emergencyinfo",
  async (body) => {
    const fetchOptions = {
      url: `/add/emergencyContact`,
      method: "post",
      secure: true,
      body: body,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  }
);

export const JobInformation = createAsyncThunk("auth/jobinfo", async (body) => {
  const fetchOptions = {
    url: `/add/jobInfo`,
    method: "post",
    secure: true,
    body: body,
  };
  const responce = await fetchHandler(fetchOptions);
  return await responce;
});

export const PersonalInformation = createAsyncThunk(
  "auth/employeeinfo",
  async (body) => {
    const fetchOptions = {
      url: `/add/employee`,
      method: "post",
      secure: true,
      body: body,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  }
);
