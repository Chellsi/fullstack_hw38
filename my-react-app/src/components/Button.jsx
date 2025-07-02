import React from "react";

// Button component
export const Button = ({ text, type = "button", onClick }) => (
  <button type={type} onClick={onClick}>
    {text}
  </button>
);

// Input component
export const Input = ({ placeholder, type = "text", onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);
