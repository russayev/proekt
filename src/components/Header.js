import React from "react";

import "../App.css";

const Header = () => {
  return (
    <div className="nav-middle">
      <div className="gruppa">
        <div className="item1">
          <a href="/">
            <img
              src="https://i.postimg.cc/5Nf8qrjz/removebg-preview.png"
              alt="error"
            />
          </a>
        </div>

        <div className="container">
          <div className="navbar-2">
            <div>
              <a href="./products">Clothes</a>
            </div>
            <div>
              <a href="./shoes">Shoes</a>
            </div>
          </div>
        </div>
      </div>

      <div id="images" className="item3">
        <a href="./login">
          <img
            src="https://img.icons8.com/material-sharp/256/user.png"
            alt="error"
          />
        </a>
        <a href="./card">
          <img
            src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/256/external-Add-To-Cart-mobile-shopping-smashingstocks-detailed-outline-smashing-stocks-4.png"
            alt="error"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
