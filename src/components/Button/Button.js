import { useRef } from "react";
import "./Button.css";

function Button({
  children,
  variant,
  onClick,
  fontSize,
  width,
  height,
  padding,
  style,
}) {
  function handleMouseDown(e) {
    const {
      nativeEvent: { offsetX, offsetY },
    } = e;

    e.target.style.setProperty("--mouseX", `${offsetX}px`);
    e.target.style.setProperty("--mouseY", `${offsetY}px`);
  }
  return (
    <>
      <button
        className={`${variant} button`}
        onMouseDown={handleMouseDown}
        onClick={onClick}
        style={{ ...style, fontSize, width, height, padding }}
        // style={{ "--mouseX": "50px" }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
