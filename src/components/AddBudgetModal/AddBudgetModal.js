import Modal from "../Modal/Modal";
import { useAppContext } from "../../context/AppContextProvider";
import { budgetsCmd } from "../../hooks/budgetsReducer";

import "./AddBudgetModal.css";
import Card from "../Card/Card";

function AddBudgetModal() {
  const { budgets, budgetsDispatch } = useAppContext();

  function toggleBudgetAdd() {
    budgetsDispatch({ type: budgetsCmd.toggleButtonAdd });
  }

  return (
    <Modal
      hasOverlay={true}
      visibility={budgets.buttonAdd ? "show" : "hidden"}
      overlayClick={toggleBudgetAdd}
      from="top"
      position="center"
    >
      <Card width="300px" style={{ margin: "auto" }}>
        <Card.Header>
          <Card.Title>Add Budgets</Card.Title>
        </Card.Header>
        <Card.Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          aliquid?
        </Card.Content>
      </Card>
    </Modal>
  );
}

export default AddBudgetModal;
