import React from "react";
import classes from "./css/login.module.css";

const Login = () => {
  // let getData = JSON.parse(localStorage.getItem("Data-User"));

  // let loginBtn = document.getElementById('btn');
  // let form = document.getElementById('loginForm');

  // loginBtn.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     let userMobile = form.mobile.value;
  //     let password = form.password.value;
  //     if (userMobile==="1234567890" && password==="admin@123"){
  //         alert("Welcome Back! Admin")
  //         window.location.href='admin'
  //     }
  //     else if (userMobile === getData.mobileNum && password === getData.password)
  //     {
  //         alert("Login Successfully");
  //         window.location.href = '/'
  //     }

  //     else
  //     {
  //         alert("Invaild Mobile Number or Password")
  //     }
  // });

  // let bar = document.getElementById('timeBar');

  // bar.addEventListener('click', function () {
  //     window.location.href = 'index.html'
  // })

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
            <h1 id={classes.timeBar}>&times;</h1>
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

            <form action="" id={classes.loginForm}>
              <label htmlFor={classes.mobile}>Mobile Number</label>
              <input
                type="text"
                name={classes.mobile}
                id={classes.mobileNo}
                placeholder="Enter Mobile Number"
                required
              />

              <label htmlFor={classes.password}>Password</label>
              <input
                type="password"
                name={classes.password}
                id={classes.passwordField}
                placeholder="Enter Password"
              />

              <button type="submit" id={classes.btn}>
                <a href="./0" id={classes.home}>
                  Login
                </a>
              </button>
            </form>

            <div className={classes.hr}></div>
            <p id={classes.pTaglast}>
              By logging in you agree to our <a href="#">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
