import React from "react";
import "./Container.css";

function Container({ children, margin, padding, style }) {
  return (
    <>
      <div className="container" style={{ ...style, margin, padding }}>
        {children}
      </div>
    </>
  );
}

export default Container;
