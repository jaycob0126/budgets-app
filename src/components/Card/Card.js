import React from "react";
import "./Card.css";

function Card({ children, shadow, style }) {
  return (
    <>
      <div
        className={`
      ${shadow ? "shadow" : ""}
      card-container`}
      >
        {children}
      </div>
    </>
  );
}

Card.Header = function ({ children }) {
  return (
    <>
      <div className="card-header">{children}</div>
    </>
  );
};

//card title
Card.Title = function ({ children }) {
  return (
    <>
      <h2 className="card-title">{children}</h2>
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

Card.Footer = function ({ children }) {
  return (
    <>
      <div className="card-footer">{children}</div>
    </>
  );
};

export default Card;
