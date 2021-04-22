import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchHandler from "utils/fetchHandler";

export const Approve = createAsyncThunk("status/put", async (id) => {
  const fetchOptions = {
    url: `/manage/approveLeaveRequest/${id}`,
    method: "PUT",
    secure: true,
  };
  const responce = await fetchHandler(fetchOptions);
  return await responce;
});

export const Reject = createAsyncThunk("status/put", async (id) => {
    const fetchOptions = {
      url: `/manage/rejectLeaveRequest/${id}`,
      method: "PUT",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  });

  export const Empstatus = createAsyncThunk("status/put", async (id) => {
    const fetchOptions = {
      url: `/status/${id}`,
      method: "PUT",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  });

  export const JobEdit = createAsyncThunk("status/put", async (id) => {
    const fetchOptions = {
      url: `/status/${id}`,
      method: "PUT",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  });

  export const PersonalEdit = createAsyncThunk("status/put", async (id) => {
    const fetchOptions = {
      url: `/status/${id}`,
      method: "PUT",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  });

  export const EmergencyEdit = createAsyncThunk("status/put", async (id) => {
    const fetchOptions = {
      url: `/status/${id}`,
      method: "PUT",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  });