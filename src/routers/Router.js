import Login from "components/login/Login";
// import Dashboard from "components/sidebar/Sidebar"
import AllInfo from '../components/employeeManagement/addEmployee/AllInfo';
import Calender from '../components/workCalender/Calender';
import Approval from '../components/leaveManagement/Approval';
import Request from '../components/leaveManagement/Request';
import EmployeeList from '../components/employeeManagement/statusOfEmployee/EmployeeList';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import DetailView from "components/employeeManagement/statusOfEmployee/DetailView";


function AppRouter() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <PublicRoute path="/" exact>
            <Login />
          </PublicRoute>
            <PrivateRoute path="/allinfo">
              <AllInfo />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Calender />
            </PrivateRoute>
            <PrivateRoute path="/request">
              <Request />
            </PrivateRoute>
            <PrivateRoute path="/approval">
              <Approval />
            </PrivateRoute>
            <PrivateRoute path="/detailview">
              <DetailView />
            </PrivateRoute>
            <PrivateRoute path="/employeelist">
              <EmployeeList />
            </PrivateRoute>
            
            <PrivateRoute path="/calender">
              <Calender/>
            </PrivateRoute>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default AppRouter;
