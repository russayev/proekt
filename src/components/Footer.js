import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Footer = () => {
  const navigate = useNavigate();

  const currentPath = window.location.pathname;

  const footerStyle =
    currentPath === "/products" || currentPath === "/shoes"
      ? "product-footer"
      : "app-footer";

  return (
    <div className={`footer ${footerStyle}`}>
      <hr />
      <div className="accept">
        <div>
          <h3>We accept</h3>
          <a href="#">
            <img src="http://surl.li/ogaat" alt="error" />
          </a>
        </div>
        <div>
          <h3>Like what you see? You'll like us even more here</h3>
          <a href="#">
            {/* <img src="./images/apps.jpg" alt="error"/> */}
            <img src="http://surl.li/ogaap" alt="error" />
          </a>
        </div>
      </div>
      <hr />
      <div className="ending">
        <div>
          <a href="#">
            <p>Buy In Bulk</p>
          </a>
          <a href="#">
            <p>Write A Testimonial</p>
          </a>
        </div>
        <div>
          <a href="#">
            <p>Whitehat</p>
          </a>
          <a href="/about">
            <p>About Us</p>
          </a>
          <a href="/conditions">
            <p>Terms Of Use</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
          <a href="#">
            <p>Your Data & Security</p>
          </a>
          <a href="#">
            <p>Grievance Redressal</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
