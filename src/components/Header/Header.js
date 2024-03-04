import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import { BsCart4 } from "react-icons/bs";
const Header = ({ totalItem }) => {
  const location = useLocation();
  return (
    <div className="header">
      <div className="title">
        <NavLink to="/">
          <span>OM Creation</span>
        </NavLink>
      </div>
      <div style={{ background: "grey" }}></div>
      {location.pathname === "/" && (
        <div className="action">
          <NavLink to="cart">
            <BsCart4
              style={{
                "text-decoration": "none",
                height: "inherit",
                "font-size": 50,
                cursor: "pointer",
                color: "black",
              }}
            />
            <span className="item_count">{totalItem}</span>
          </NavLink>
        </div>
      )}
      {location.pathname === "/cart" && (
        <div className="action">
          <NavLink to="/checkout">
            <button className="checkout">Checkout & Payment</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
