import { Route, Redirect } from "react-router-dom";

import { useAuthInfo } from "../../context/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userInfo } = useAuthInfo();

  const isAuthenticated = userInfo;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
