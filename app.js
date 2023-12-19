import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement("h1", {className:'Heading'}, "Namaste React 🔥");
console.log("React Element :", title);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root :", root);

root.render(title);
