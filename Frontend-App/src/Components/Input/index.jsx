import React from "react";
import './index.scss';

export default function BaseInput({
  type,
  id,
  name,
  value,
  placeholder,
  ...children
}) {
  return (
    <input
      className="base-input"
      {...children}
      type={type ? type : "text"}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder ? placeholder : ""}
    />
  );
}
