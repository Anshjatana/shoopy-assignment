import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/PayPal-logo-white-png-horizontal.png"
          alt="logo"
        />
        <ul id="list">
          <li>Home</li>
          <li>Finances</li>
          <li>Send and Request</li>
          <li>Deals</li>
          <li>Wallets</li>
          <li>Activity</li>
          <li>Help</li>
        </ul>
      </div>
      <hr />
      <p id="copyright">Copyright 2023 Paypal</p>
    </div>
  );
};

export default Footer;
