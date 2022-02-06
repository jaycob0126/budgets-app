import Button from "../Button/Button";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header-container">
        <section className="header-section">
          <h1 className="site-logo">
            BUD<span>GETS</span>
          </h1>
        </section>
        <section className="header-section">
          <Button variant="primary">Add Budget</Button>
          <Button variant="primary-outline">Add Expense</Button>
        </section>
        <section className="header-section">
          <div className="icon-dropdown">
            <svg
              width="32"
              height="8"
              viewBox="0 0 32 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 2L16 5L29.5 2"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
