import Login from "components/login/Login";
// import Dashboard from "components/sidebar/Sidebar"
import AllInfo from "../components/employeeManagement/addEmployee/AllInfo";
import Calender from "../components/workCalender/Calender";
import Approved from "../components/leaveManagement/Approved";
import LeaveRequest from "../components/leaveManagement/LeaveRequest";
import EmployeeList from "../components/employeeManagement/statusOfEmployee/EmployeeList";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import DetailView from "components/employeeManagement/statusOfEmployee/DetailView";
import ForgotPassword from "components/login/ForgotPassword";
import ChangeLeaveStatus from "components/leaveManagement/ChangeLeaveStatus";
import Rejected from "components/leaveManagement/Rejected";

function AppRouter() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <PublicRoute path="/" exact>
            <Login />
          </PublicRoute>
          <PublicRoute path="/forgotpassword">
            <ForgotPassword />
          </PublicRoute>
          <PrivateRoute path="/allinfo">
            <AllInfo />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Calender />
          </PrivateRoute>
          <PrivateRoute path="/leaverequest">
            <LeaveRequest />
          </PrivateRoute>
          <PrivateRoute path="/approved">
            <Approved />
          </PrivateRoute>
          <PrivateRoute path="/rejected">
            < Rejected />
          </PrivateRoute>
          <PrivateRoute path="/detailview">
            <DetailView />
          </PrivateRoute>
          <PrivateRoute path="/employeelist">
            <EmployeeList />
          </PrivateRoute>
          <PrivateRoute path="/changeleavestatus">
            <ChangeLeaveStatus />
          </PrivateRoute>
          <PrivateRoute path="/calender">
            <Calender />
          </PrivateRoute>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default AppRouter;
