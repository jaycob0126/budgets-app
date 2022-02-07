import React from "react";
import "./Card.css";

function Card({ children, shadow, width, bgColor, gap, roundedCorner, style }) {
  return (
    <>
      <div
        className={`
      ${shadow ? "shadow" : ""}
      card-container ${roundedCorner ? "card-rounded-corners" : ""}`}
        style={{ ...style, width, backgroundColor: bgColor, gap }}
      >
        {children}
      </div>
    </>
  );
}

Card.Header = function ({ children, style }) {
  return (
    <>
      <div className="card-header" style={{ ...style }}>
        {children}
      </div>
    </>
  );
};

//card title
Card.Title = function ({ children, style }) {
  return (
    <>
      <h2 className="card-title" style={{ ...style }}>
        {children}
      </h2>
    </>
  );
};

Card.Item = function ({ children }) {
  return (
    <>
      <div className="card-item">{children}</div>
    </>
  );
};

//card content

Card.Content = function ({ children, outline }) {
  return (
    <>
      <div className={`${outline ? "card-outline" : ""} card-content`}>
        {children}
      </div>
    </>
  );
};

Card.Footer = function ({ children, direction, justify, align, style }) {
  return (
    <>
      <div
        className="card-footer"
        style={{
          ...style,
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
        }}
      >
        {children}
      </div>
    </>
  );
};

Card.HorizontalRule = function () {
  return (
    <>
      <hr className="card-hr" />
    </>
  );
};

export default Card;
