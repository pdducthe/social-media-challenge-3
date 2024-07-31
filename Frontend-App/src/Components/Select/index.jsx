import React from "react";
import "./index.scss";

export default function BaseSelect({ id, name, options, ...children }) {
  return (
    <>
      <select {...children} className="base-select" name={name}>
        {options.map((item, idx) => (
          <option id={item.id} key={idx} value={item.value || "option_1"}>
            {item.label || "Option 1"}
          </option>
        ))}
      </select>
    </>
  );
}
