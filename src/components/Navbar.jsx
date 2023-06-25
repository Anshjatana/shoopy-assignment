import React from "react";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div className="left">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/PayPal-icon-white-png-vertical.png"
            alt="logo"
          />
          <ul id="list">
            <li>Home</li>
            <li>Finances</li>
            <li>Send and Request</li>
            <li>Deals</li>
            <li>Wallets</li>
            <li id="activity">Activity</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="right">
          <img
            id="bell"
            src="https://img.icons8.com/material-sharp/24/FFFFFF/bell.png"
            alt="bell"
          />
          <img
            id="setting"
            src="https://img.icons8.com/material-sharp/24/FFFFFF/settings.png"
            alt="bell"
          />
          <a href="/" id="logOut">
            Log Out
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
