import React, { useState } from "react";
import classes from "./css/login.module.css";

const Login = () => {
  const handleBarClick = () => {
    window.location.href = "./";
  };

  return (
    <div id={classes.login} className={classes.login}>
      <div className={classes.container}>
        <div className={classes.leftSidePopUp}>
          <div className={classes.whySide}>
            <h2>Why login?</h2>

            <p className={classes.checkmarkp}>Manage your orders</p>
            <br />
            <p className={classes.checkmarkp}>Get exclusive deals and offers</p>
            <br />
            <p className={classes.checkmarkp}>Personalized Recommendations</p>
          </div>
        </div>

        <div className={classes.rightSidePopUp}>
          <div className={classes.loginPage}>
            <h1 id={classes.timeBar} onClick={handleBarClick}>
              &times;
            </h1>

            <div className={classes.userPanel}>
              <h3 id={classes.loginH3}>
                <a href="./login">Login</a>
              </h3>
              <h3 id={classes.signup}>
                <a className={classes.signup} href="./signup">
                  Signup
                </a>
              </h3>
              <div className={classes.animation}></div>
            </div>

            <form id={classes.loginForm}>
              <div>
                <label htmlFor={classes.mobile}>Mobile number</label>
                <input
                  type="text"
                  name={classes.mobile}
                  id={classes.mobileNo}
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
              <div>
                <label htmlFor={classes.password}>Password</label>
                <input
                  type="password"
                  name="password"
                  id={classes.passwordField}
                  placeholder="Enter Password"
                />
              </div>

              <button type="submit" id={classes.btn}>
                Login
              </button>

              <div>
                <div className={classes.hr}></div>
                <p id={classes.pTaglast}>
                  By logging in you agree to our{" "}
                  <a href="./conditions" target="_blank">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
