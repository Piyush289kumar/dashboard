import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

function Button({
  icon,
  color,
  bgColor,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) {
  const { setIsClicked, initializationState } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setIsClicked(initializationState)}
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
