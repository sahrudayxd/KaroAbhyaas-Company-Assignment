import { Link } from "react-router-dom";
import "./index.css";
import CommonLayout from "../CommonLayout";

const NotFound = () => {
  return (
    <CommonLayout>
      <div className="not-found-container">
        <h1 className="not-found-msg">
          The page you requested could not be found.
        </h1>
        <Link to="/">
          <button type="button" className="not-found-button">
            Return Home
          </button>
        </Link>
      </div>
    </CommonLayout>
  );
};

export default NotFound;
