import "./Button.css";

function Button({ children, variant }) {
  return (
    <>
      <button className={`${variant} button`}>{children}</button>
    </>
  );
}

export default Button;
