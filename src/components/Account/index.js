import { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";
import CommonLayout from "../CommonLayout";
import UserOrders from "./StudyHub/userOrders";
import UserTests from "./StudyHub/userTests";
import UserQuestions from "./StudyHub/userQuestions";

const tabConstants = {
  orders: "ORDERS",
  tests: "TESTS",
  questions: "QUESTIONS",
};

class Account extends Component {
  state = {
    activeTab: "ORDERS",
  };

  onClickLogout = () => {
    Cookies.remove("karo_abhyaas_id");
    const { history } = this.props;

    history.replace("/login");
  };

  renderUserdetails = () => (
    <div className="user-details">
      <div>
        <h1 className="user-details-title">Sahruday</h1>
        <p className="user-details-number">+911234567890</p>
        <p className="user-details-gmail">Gandlahoneyxd@Gmail.com</p>
      </div>
      <div className="address-container">
        <h1 className="user-details-title">ADDRESS</h1>
        <p className="user-details-address">
          +R107, AJMERA INFINITY, <br />
          KARUNA NAGAR, ELECTRONIC CITY,
          <br />
          BANGALORE, INDIA
          <br />
          PIN: 846009
        </p>
      </div>
    </div>
  );

  renderEditLogoutButtons = () => (
    <div className="edit-logout-buttons">
      <button className="edit-button">EDIT</button>
      <button className="logout-button" onClick={this.onClickLogout}>
        LOGOUT
      </button>
    </div>
  );

  onClickOrders = () => {
    const { activeTab } = this.state;
    if (activeTab !== tabConstants.orders) {
      this.setState({ activeTab: tabConstants.orders });
    }
  };

  onClickTests = () => {
    const { activeTab } = this.state;
    if (activeTab !== tabConstants.tests) {
      this.setState({ activeTab: tabConstants.tests });
    }
  };

  onClickQA = () => {
    const { activeTab } = this.state;
    if (activeTab !== tabConstants.questions) {
      this.setState({ activeTab: tabConstants.questions });
    }
  };

  renderAccountTabs = () => {
    const { activeTab } = this.state;

    return (
      <div className="account-tabs">
        <button
          className={
            activeTab === tabConstants.orders
              ? "active-tab-button"
              : "tab-button"
          }
          onClick={this.onClickOrders}
        >
          ORDERS
        </button>
        <button
          className={
            activeTab === tabConstants.tests
              ? "active-tab-button"
              : "tab-button"
          }
          onClick={this.onClickTests}
        >
          TESTS
        </button>
        <button
          className={
            activeTab === tabConstants.questions
              ? "active-tab-button"
              : "tab-button"
          }
          onClick={this.onClickQA}
        >
          Q/A
        </button>
      </div>
    );
  };

  renderActiveTabView = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case tabConstants.orders:
        return <UserOrders />;
      case tabConstants.tests:
        return <UserTests />;
      case tabConstants.questions:
        return <UserQuestions />;
      default:
        return null;
    }
  };

  render() {
    return (
      <CommonLayout>
        <div className="account">
          <div className="account-width-container">
            {this.renderUserdetails()}
            {this.renderEditLogoutButtons()}
            {this.renderAccountTabs()}
            {this.renderActiveTabView()}
          </div>
        </div>
      </CommonLayout>
    );
  }
}

export default withRouter(Account);
