import React, { Fragment, useEffect } from "react";
import AppRouter from "routers/Router";

function App() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("isLogin")))
      localStorage.setItem("isLogin", false);
  }, []);
  return (
    <Fragment>
      <AppRouter />
    </Fragment>
  );
}

export default App;
