import React from "react";

export default function Rainbow(WrappedComponent) {
  const colours = ["red", "blue", "green", "orange", "chocolate", "yellow"];
  const randomColour =
    colours[Math.floor(Math.random() * (colours.length - 1))];

  const className = randomColour + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
