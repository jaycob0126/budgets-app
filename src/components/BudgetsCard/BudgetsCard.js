import React from "react";
import Card from "../Card/Card";
import Flex from "../utils/Flex/Flex";
import "./BudgetsCard.css";
import { toPHP, toDate } from "../../utils/numberFormatter";
import Button from "../Button/Button";

const budgets = [
  {
    id: 1,
    name: "School",
    amount: 200,
    maxAmount: 2000,
  },
  {
    id: 2,
    name: "Work",
    amount: 900,
    maxAmount: 1500,
  },
  {
    id: 3,
    name: "Home",
    amount: 2000,
    maxAmount: 3000,
  },
  { id: 4, name: "Adventures", amount: 2000, maxAmount: 4000 },
];

function BudgetsCard() {
  return (
    <>
      <div className="container-budgets-card">
        {budgets.map((budget) => {
          const budgetRatio = budget.amount / budget.maxAmount;
          var progressColor;
          switch (true) {
            case budgetRatio < 0.3:
              progressColor = "blue";
              break;
            case budgetRatio < 0.6:
              progressColor = "yellow";
              break;
            case budgetRatio < 0.9:
              progressColor = "red";
              break;
          }

          return (
            <Card shadow={true} key={budget.id}>
              <Card.Header>
                <Card.Title>{budget.name}</Card.Title>
                <Card.Item>
                  {toPHP(budget.amount)} /
                  <span className="budget-max-amount">
                    {toPHP(budget.maxAmount)}
                  </span>
                </Card.Item>
              </Card.Header>
              <Card.Content outline={true}>
                <Flex direction="column" align="flex-start" gap="1em">
                  <progress
                    className="progress-budget"
                    value={budget.amount}
                    max={budget.maxAmount}
                    // style={{ backgroundColor: progressColor }}
                  ></progress>
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
                <Button variant="primary-outline">Delete</Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default BudgetsCard;
