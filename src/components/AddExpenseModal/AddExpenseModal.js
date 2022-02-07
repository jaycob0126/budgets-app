import Modal from "../Modal/Modal";
import { useAppContext } from "../../context/AppContextProvider";

import "./AddExpenseModal.css";
import Card from "../Card/Card";
import { appStateCmd } from "../../reducers/appStateReducer";
import Form from "../Form/Form";
import Button from "../Button/Button";
import Flex from "../utils/Flex/Flex";

function AddExpenseModal() {
  const { appState, appStateDispatch } = useAppContext();

  function toggleAddExpense() {
    appStateDispatch({ type: appStateCmd.toggleAddExpense });
  }

  return (
    <Modal
      hasOverlay={true}
      visibility={appState.addExpenseActive ? "show" : "hidden"}
      overlayClick={toggleAddExpense}
      from="top"
      position="center"
    >
      <Card width="300px" style={{ margin: "auto" }} roundedCorner={true}>
        <Card.Header style={{ justifyContent: "center" }}>
          <Card.Title>Add Expense</Card.Title>
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
            <Flex direction="row" gap="8px" justify="space-between">
              <Form.InputGroup>
                <Form.Label fontSize=".8em">Budget</Form.Label>
                <Form.InputText width="110px" fontSize=".8em" />
              </Form.InputGroup>
              <Form.InputGroup>
                <Form.Label fontSize=".8em">Category</Form.Label>
                <Form.InputText width="110px" fontSize=".8em" />
              </Form.InputGroup>
            </Flex>
          </Form>
        </Card.Content>
        <Card.Footer style={{ justifyContent: "center", alignItems: "center" }}>
          <Button variant="primary">Create</Button>
          <Button
            padding=".4em 2em"
            variant="secondary-outline"
            onClick={toggleAddExpense}
          >
            Exit
          </Button>
        </Card.Footer>
      </Card>
    </Modal>
  );
}

export default AddExpenseModal;
