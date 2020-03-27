import React from "react";

export const Header = props => (
  <div
    onClick={props.onClick}
    style={{
      width: "100%",
      height: 50,
      display: "flex",
      paddingLeft: 16,
      alignItems: "center"
    }}
  >
    <img
      src={require("../icons/burger.svg")}
      style={{ width: 27, height: 27 }}
    />
    <p style={{ color: "white", fontSize: 27, marginLeft: 16 }}>
      {props.title}
    </p>
  </div>
);
