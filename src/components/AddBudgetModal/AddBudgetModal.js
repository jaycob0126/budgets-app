import Modal from "../Modal/Modal";
import { useAppContext } from "../../context/AppContextProvider";

import "./AddBudgetModal.css";
import Card from "../Card/Card";
import { appStateCmd } from "../../reducers/appStateReducer";
import Form from "../Form/Form";
import Button from "../Button/Button";

function AddBudgetModal() {
  const { appState, appStateDispatch } = useAppContext();

  function toggleBudgetAdd() {
    appStateDispatch({ type: appStateCmd.toggleAddBudget });
  }

  return (
    <Modal
      hasOverlay={true}
      visibility={appState.addBudgetActive ? "show" : "hidden"}
      overlayClick={toggleBudgetAdd}
      from="top"
      position="center"
    >
      <Card width="300px" style={{ margin: "auto" }} roundedCorner={true}>
        <Card.Header style={{ justifyContent: "center" }}>
          <Card.Title>Add Budgets</Card.Title>
        </Card.Header>
        <Card.HorizontalRule />
        <Card.Content>
          <Form>
            <Form.InputGroup>
              <Form.Label>Name</Form.Label>
              <Form.InputText />
            </Form.InputGroup>
            <Form.InputGroup>
              <Form.Label>Amount</Form.Label>
              <Form.InputText />
            </Form.InputGroup>
          </Form>
        </Card.Content>
        <Card.Footer style={{ justifyContent: "center", alignItems: "center" }}>
          <Button variant="primary">Create</Button>
          <Button
            padding=".4em 2em"
            variant="secondary-outline"
            onClick={toggleBudgetAdd}
          >
            Exit
          </Button>
        </Card.Footer>
      </Card>
    </Modal>
  );
}

export default AddBudgetModal;
