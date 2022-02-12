import React from "react";
import "./Flex.css";

function Flex({ children, direction, gap, justify, align, style }) {
  return (
    <>
      <div
        style={{
          ...style,
          gap,
          justifyContent: justify,
          alignItems: align,
          flexDirection: direction,
        }}
        className={`container-flex`}
      >
        {children}
      </div>
    </>
  );
}

export default Flex;
