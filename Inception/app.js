/**
 * <header>
 *  <h1>Heading <span> line </span></h1>
 *  <p> Heading text goes here... </p>
 * </header>
 */

const ele = React.createElement("header", {}, [
  React.createElement("h1", {}, [
    "heading",
    React.createElement("span", {}, "line"),
  ]),
  React.createElement("p1", {}, "Heading text goes here"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);
