import { Redirect, Route } from "react-router-dom";
import Sidebar from "components/sidebar/Sidebar";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Sidebar children={children} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
