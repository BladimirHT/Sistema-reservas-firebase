import { Redirect, Route } from "react-router";
import { useUser } from "../providers/UserProvider";

export const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useUser();

  return (
    <Route
    {...rest}
      render={({ location }) => {
        return user.name ? (
          <Redirect to="/signUp" exact/>
        ) : (
          <Redirect to={{ pathname: "/", state: location }} />
        );
      }}
     />
  );
};

