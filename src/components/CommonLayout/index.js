import Navbar from "../Navbar";

import "./index.css";

const CommonLayout = ({ children }) => (
  <div className="common-layout-container">
    <Navbar />
    {children}
  </div>
);

export default CommonLayout;
