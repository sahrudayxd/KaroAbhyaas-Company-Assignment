import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

import "./index.css";
import CommonLayout from "../CommonLayout";

class Login extends Component {
  state = { username: "", password: "", showErrorMsg: false };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  authenticateFailure = () => {
    this.setState({ showErrorMsg: true });
  };

  authenticateSuccess = (username) => {
    Cookies.set("karo_abhyaas_id", username, { expires: 30 });
    const { history } = this.props;

    history.replace("/");
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (username !== "" && password !== "") {
      this.authenticateSuccess(username);
    } else {
      this.authenticateFailure();
    }
  };

  redirectToSignupPage = () => {
    const { history } = this.props;

    history.replace("/signup");
  };

  render() {
    const authId = Cookies.get("karo_abhyaas_id");
    if (authId !== undefined) {
      return <Redirect to="/" />;
    }
    const { username, password, showErrorMsg } = this.state;

    return (
      <CommonLayout>
        <div className="login-container">
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <input
              value={username}
              className="login-input"
              placeholder="USERNAME"
              onChange={this.onChangeUsername}
            />

            <input
              type="password"
              value={password}
              className="login-input"
              placeholder="PASSWORD"
              onChange={this.onChangePassword}
            />

            {showErrorMsg && (
              <p className="error-msg">Enter any Random Words</p>
            )}

            <button type="submit" className="login-button">
              LOGIN
            </button>

            <div className="login-footer">
              <p className="login-footer-msg">Don’t have an account?</p>
              <button
                className="redirect-sign-up"
                onClick={this.redirectToSignupPage}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </CommonLayout>
    );
  }
}

export default Login;
