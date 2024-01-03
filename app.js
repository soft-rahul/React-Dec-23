import React from "react";
import ReactDOM from "react-dom/client";

/*
  Heading
    - Logo
    - Menu
  Body
    - Search Bar
    - RestaurantList
      - Restaurant Card
  Footer
    - Copyright 
    - Links
    - Address
    - Contact
*/

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105934/1855.png"
          alt=""
        />
      </div>
      <div className="menu">
        <ul className="menu-items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
