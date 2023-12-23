import React, { useState } from "react";
import styles from "./css/signup.module.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNum: "",
    password: "",
    rePassword: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePassword) {
      alert("Password does not match");
    } else {
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBarClick = () => {
    window.location.href = "./";
  };

  return (
    <div id={styles.login}>
      <div className={styles.container}>
        <div className={styles.leftSidePopUp}>
          <div className={styles.whySide}>
            <h2>Why Sign Up?</h2>

            <p className={styles.checkmarkp}>
              Over 1.5 million satisfied customers
            </p>
            <br />
            <p className={styles.checkmarkp}>Earn HK cash on every order</p>
            <br />
            <p className={styles.checkmarkp}>
              Get personal fitness expert advice
            </p>
            <br />
          </div>
        </div>
        <div className={styles.rightSidePopUp}>
          <div className={styles.loginPage}>
            <h1 onClick={handleBarClick} id={styles.timeBar}>
              &times;
            </h1>
            <div className={styles.userPanel}>
              <h3>
                <a href="./login">Login</a>
              </h3>
              <h3 id="signup">
                <a href="./signup">Signup</a>
              </h3>
            </div>

            <form onSubmit={formSubmit} id={styles.formSubmit}>
              <div>
                <label htmlFor={styles.name}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor={styles.mobile}>Mobile Number</label>
                <input
                  type="text"
                  name="mobileNum"
                  id="mobileNo"
                  placeholder="Enter 10 digit no."
                  value={formData.mobileNum}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor={styles.password}>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  autoComplete="on"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor={styles.password}>Re-Enter Password</label>
                <input
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Re-Enter Password"
                  autoComplete="on"
                  value={formData.rePassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" id={styles.btn}>
                Sign Up
              </button>

              <div>
                <div className={styles.hr}></div>
                <p id={styles.pTaglast}>
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

export default Signup;
