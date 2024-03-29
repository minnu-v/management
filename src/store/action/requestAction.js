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

export const Rejected = createAsyncThunk("request/get", async (body) => {
  const fetchOptions = {
    url: `/view/rejectedList`,
    method: "GET",
    secure: true,
  };
  const responce = await fetchHandler(fetchOptions);
  return await responce;
});

export const EmployeeList = createAsyncThunk("request/get", async (body) => {
  const fetchOptions = {
    url: `/view/status`,
    method: "GET",
    secure: true,
  };
  const responce = await fetchHandler(fetchOptions);
  return await responce;
});

export const ChangeLeaveStatus = createAsyncThunk("request/get", async (id) => {
    const fetchOptions = {
      url: `/view/leave/${id}`,
      method: "GET",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  }
);

export const Job = createAsyncThunk("request/get", async (id) => {
    const fetchOptions = {
      url: `/view/employee/job/${id}`,
      method: "GET",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  }
);

export const Personal = createAsyncThunk("request/get", async (id) => {
    const fetchOptions = {
      url: `/view/employee/personal/${id}`,
      method: "GET",
      secure: true,
    };
    const responce = await fetchHandler(fetchOptions);
    return await responce;
  }
);

export const Emergency = createAsyncThunk("request/get", async (id) => {
  const fetchOptions = {
    url: `/view/employee/contact/${id}`,
    method: "GET",
    secure: true,
  };
  const responce = await fetchHandler(fetchOptions);
  return await responce;
}
);
