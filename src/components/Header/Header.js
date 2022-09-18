import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/AppContextProvider";
import { appStateCmd } from "../../reducers/appStateReducer";
import { budgetsCmd } from "../../reducers/budgetsReducer";
import Button from "../Button/Button";
import Dashboard from "../Dashboard/Dashboard";
import "./Header.css";

function Header() {
  const { appState, appStateDispatch } = useAppContext();

  const [showDashboard, setShowDashboard] = useState(false);
  const logoRef = useRef();
  const buttonsRef = useRef();
  const buttonHiddenRef = useRef();
  const dropDownIcon = useRef();

  function handleDashboardDropDown(e) {
    dropDownIcon.current.classList.toggle("mirror");
    setShowDashboard((showDashboard) => !showDashboard);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.matches(".site-logo")) {
          if (entry.isIntersecting) {
            buttonHiddenRef.current.classList.remove("ontop");
          }
        } else {
          if (!entry.isIntersecting) {
            buttonHiddenRef.current.classList.add("ontop");
          }
        }
      });
    }, {});

    observer.observe(buttonsRef.current);
    observer.observe(logoRef.current);
  }, [buttonsRef, logoRef]);

  function handleBudgetAdd() {
    appStateDispatch({ type: appStateCmd.toggleAddBudget });
  }

  function handleExpenseAdd() {
    appStateDispatch({ type: appStateCmd.toggleAddExpense });
  }

  return (
    <>
      <header className="header-container">
        <section className="header-section">
          <a href="#">
            <h1 className="site-logo" ref={logoRef}>
              BUD<span>GETS</span>
            </h1>
          </a>
        </section>
        <section className="header-section" ref={buttonsRef}>
          <Button variant="primary" onClick={handleBudgetAdd}>
            Add Budget
          </Button>
          <Button variant="primary-outline" onClick={handleExpenseAdd}>
            Add Expense
          </Button>
        </section>
        <Dashboard hidden={showDashboard} />
        <div className="button-intersect" ref={buttonHiddenRef}>
          <Button variant="primary" onClick={handleBudgetAdd}>
            Add Budget
          </Button>
          <Button variant="primary-outline" onClick={handleExpenseAdd}>
            Add Expense
          </Button>
        </div>

        <section className="header-section" onClick={handleDashboardDropDown}>
          <div className="icon-dropdown">
            <svg
              ref={dropDownIcon}
              viewBox="0 0 32 8"
              width="32"
              height="8"
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
