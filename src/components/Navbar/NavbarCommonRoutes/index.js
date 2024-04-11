import { withRouter, Link } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";

const NavbarCommonRoutes = (props) => {
  const { match } = props;
  const { path } = match;

  const authId = Cookies.get("karo_abhyaas_id");

  return (
    <>
      <li className="route">
        <Link to="/classes">
          <span
            className={path === "/classes" ? "active-route-name" : "route-name"}
          >
            Classes
          </span>
        </Link>
      </li>
      <li className="route">
        <Link to="/products">
          <span
            className={
              path === "/products" ? "active-route-name" : "route-name"
            }
          >
            Products
          </span>
        </Link>
      </li>
      <li className="route">
        <Link to="/about">
          <span
            className={path === "/about" ? "active-route-name" : "route-name"}
          >
            About Us
          </span>
        </Link>
      </li>
      {authId === undefined && path !== "/signup" && (
        <li className="route join-us-link">
          <Link to="/signup">
            <button className="nav-sign-up">SIGN UP</button>
          </Link>
        </li>
      )}
    </>
  );
};

export default withRouter(NavbarCommonRoutes);
