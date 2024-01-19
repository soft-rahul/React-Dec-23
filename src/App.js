import React from "react";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

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
