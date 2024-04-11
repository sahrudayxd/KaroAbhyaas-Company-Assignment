import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

import "./index.css";
import CommonLayout from "../CommonLayout";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    OTP: "",
    showErrorMsg: false,
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  onChangeOTP = (event) => {
    this.setState({ OTP: event.target.value });
  };

  authenticateFailure = () => {
    this.setState({ showErrorMsg: true });
  };

  authenticateSuccess = (name) => {
    Cookies.set("karo_abhyaas_id", name, { expires: 30 });
    const { history } = this.props;

    history.replace("/");
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { name, email } = this.state;

    if (name !== "" && email !== "") {
      this.authenticateSuccess(name);
    } else {
      this.authenticateFailure();
    }
  };

  redirectToLoginPage = () => {
    const { history } = this.props;

    history.replace("/login");
  };

  render() {
    const { name, email, phoneNumber, OTP, showErrorMsg } = this.state;
    const authId = Cookies.get("karo_abhyaas_id");
    if (authId !== undefined) {
      return <Redirect to="/" />;
    }

    return (
      <CommonLayout>
        <div className="signup-container">
          <form className="signup-form" onSubmit={this.onSubmitForm}>
            <input
              value={name}
              className="signup-input"
              placeholder="NAME"
              onChange={this.onChangeName}
            />
            <input
              value={email}
              className="signup-input"
              placeholder="EMAIL"
              onChange={this.onChangeEmail}
            />
            <div className="phonenumber-get-otp">
              <input
                value={phoneNumber}
                className="signup-input"
                placeholder="PHONE NUMBER"
                onChange={this.onChangePhoneNumber}
              />
              <button className="send-otp-button">SEND OTP</button>
            </div>
            <div className="otp-failure-container">
              <p className="otp-failure-msg">Didn’t Receive It?</p>
              <button className="resend-otp">RESEND</button>
            </div>

            <input
              value={OTP}
              className="signup-input"
              placeholder="OTP"
              onChange={this.onChangeOTP}
            />

            {showErrorMsg && (
              <p className="error-msg">Enter any Random Words</p>
            )}

            <button type="submit" className="signup-button">
              SIGN UP
            </button>

            <div className="signup-footer">
              <p className="signup-footer-msg">Already have an account?</p>
              <button
                className="redirect-login"
                onClick={this.redirectToLoginPage}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </CommonLayout>
    );
  }
}

export default Signup;
