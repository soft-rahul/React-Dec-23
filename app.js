import React from "react";
import { DATA } from "./constant";
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

const RestaurantCard = ({ name, imageUrl, rating }) => {
  return (
    <div className="res-card">
      <div className="res-visual">
        <img src={imageUrl} alt="res-logo" />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <h4>Indian, south Indian, chinese, etc</h4>
        <h4>{rating}</h4>
        <h4>EST 30 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <main className="body">
      <div className="searchBar">Search</div>
      <div className="res-container">
        {DATA.map((res) => {
          console.log(res?.info);
          return (
            <RestaurantCard
              key={res?.info?.resId}
              name={res?.info?.name}
              imageUrl={res?.info?.image?.url}
              rating={res?.info?.rating?.rating_text}
            />
          );
        })}
      </div>
    </main>
  );
};

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
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
