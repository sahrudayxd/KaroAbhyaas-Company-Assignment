import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const userId = Cookies.get("karo_abhyaas_id");

  if (userId === undefined) {
    return <Redirect to="/signup" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
