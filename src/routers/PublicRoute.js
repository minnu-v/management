import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ children, ...rest }) => {
  let auth = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PublicRoute;
