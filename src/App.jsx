import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.age),
    React.createElement("h2", {}, props.orgin),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {}, // we can also put null instead of empty object both of them mean essentially the same thing.
    [
      React.createElement("h1", {}, "PLEASE ADOPT ME !"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        age: 13,
        orgin: "USA",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        age: 8,
        orgin: "Rio",
      }),
      React.createElement(Pet, {
        name: "Garfield",
        animal: "Cat",
        age: 4,
        orgin: "Canada",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
