import React, { useMemo } from "react";
import "./index.scss";

export default function BaseButton({ label, className, ...children }) {
  const customClassName = className
    ? `${className} base-button`
    : "base-button";
  const isDisabled = useMemo(() => {
    return className === "disabled" ? true : false;
  }, [className]);
  return (
    <button disabled={isDisabled} className={customClassName} {...children}>
      {label}
    </button>
  );
}
