import { withRouter, Link } from "react-router-dom";

import "./index.css";

const NavbarCommonRoutes = (props) => {
  const { match } = props;
  const { path } = match;
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
        <Link to="/about-us">
          <span
            className={
              path === "/about-us" ? "active-route-name" : "route-name"
            }
          >
            About Us
          </span>
        </Link>
      </li>
      <li className="route join-us-link">
        <Link to="/signup">
          <span className="join-us">JOIN US</span>
        </Link>
      </li>
    </>
  );
};

export default withRouter(NavbarCommonRoutes);
