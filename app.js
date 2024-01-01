import React from "react";
import ReactDOM from "react-dom/client";

// This is a react element
const title = React.createElement(
  "h1",
  { className: "Heading" },
  "Namaste React 🔥"
);

let reactVersion = "18.0";
const addNumbers = (n1, n2) => n1 + n2;
// Functional component
const Heading = () => {
  return (
    <div className="container">
      <h1>Welcome to React {''}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);
