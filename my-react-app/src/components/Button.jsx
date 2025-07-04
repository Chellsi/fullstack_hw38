import React from "react";


export const Button = ({ text, type = "button", onClick }) => (
  <button type={type} onClick={onClick}>
    {text}
  </button>
);
