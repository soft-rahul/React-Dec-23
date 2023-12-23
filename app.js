import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement(
  "h1",
  { className: "Heading" },
  "Namaste React 🔥"
);
console.log("React Element using CreateElement:", title);

const title2 = <h1 className="Heading">Bye Bye React!</h1>;
console.log("React Element using JSX :", title2);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([title, title2]);
