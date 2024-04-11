import { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Popup from "reactjs-popup";

import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import "./index.css";
import NavbarCommonRoutes from "./NavbarCommonRoutes";

class Navbar extends Component {
  renderMobilePopupMenu = () => (
    <div className="mobile-menu-icon">
      <Popup
        trigger={
          <button className="open-menu-button" type="button">
            <IoMenu size={32} />
          </button>
        }
        modal
        closeOnDocumentClick={false}
      >
        {(closeMenu) => (
          <div className="mobile-menu-popup">
            <div className="close-menu-container">
              <button type="button" onClick={closeMenu}>
                <IoCloseSharp size={32} />
              </button>
            </div>
            <ul>
              <NavbarCommonRoutes />
            </ul>
          </div>
        )}
      </Popup>
    </div>
  );

  renderDesktopRoutes = () => (
    <ul className="navbar-desktop-routes">
      <NavbarCommonRoutes />
    </ul>
  );

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h1 className="karo-abhayaas-logo">Karo Abhayaas</h1>
        </Link>
        <div className="navbar-routes">
          {this.renderDesktopRoutes()}
          <Link to="/account">
            <button className="navbar-route-icon">
              <FaUser size={24} color="#000000" />
            </button>
          </Link>
          <Link to="/cart">
            <button className="navbar-route-icon">
              <FaShoppingCart size={26} color="#000000" />
            </button>
          </Link>
          {this.renderMobilePopupMenu()}
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
