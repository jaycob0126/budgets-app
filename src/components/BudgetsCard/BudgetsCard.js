import Card from "../Card/Card";
import Flex from "../utils/Flex/Flex";
import "./BudgetsCard.css";
import { toPHP, toDate } from "../../utils/numberFormatter";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useAppContext } from "../../context/AppContextProvider";
import { useRef, useState } from "react";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import { appStateCmd } from "../../reducers/appStateReducer";

function BudgetsCard() {
  const { budgets, budgetsDispatch } = useAppContext();

  return (
    <>
      <div className="container-budgets-card">
        {budgets.map((budget) => {
          return <BudgetsCardContent budget={budget} key={budget.id} />;
        })}
      </div>
    </>
  );
}

const BudgetsCardContent = function ({ budget }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [answer, setAnswer] = useState(false);

  const budgetRatio = budget.amount / budget.maxAmount;
  var progressColor;
  switch (true) {
    case budgetRatio < 0.3:
      progressColor = "blue";
      break;
    case budgetRatio < 0.7:
      progressColor = "yellow";
      break;
    case budgetRatio <= 1:
      progressColor = "red";
      break;
  }

  function handleConfirmDelete() {
    setConfirmDelete((prev) => !prev);
  }

  return (
    <>
      <ConfirmDeleteModal
        name={budget.name}
        visibility={confirmDelete}
        setAnswer={setAnswer}
        answer={answer}
        setConfirmDelete={setConfirmDelete}
      />
      <Card shadow={true} roundedCorner={true}>
        <Card.Header>
          <Card.Title>{budget.name}</Card.Title>
          <Card.Item>
            {toPHP(budget.amount)} /
            <span className="budget-max-amount">{toPHP(budget.maxAmount)}</span>
          </Card.Item>
        </Card.Header>
        <Card.Content outline={true}>
          <Flex direction="column" align="flex-start" gap="1em">
            <ProgressBar
              value={budget.amount}
              maxValue={budget.maxAmount}
              fgColor={progressColor}
              width="100%"
              height="12px"
            />
            <Card.Item>
              <h3>Last Expense</h3>
              <h3>Milk</h3>
              <p>Price: {toPHP(200)}</p>
              <p>Date: {toDate(Date.now())}</p>
            </Card.Item>
          </Flex>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary">Add Expense</Button>
          <Button variant="primary-outline" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BudgetsCard;
