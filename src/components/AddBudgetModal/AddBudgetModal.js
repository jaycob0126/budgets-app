import Modal from "../Modal/Modal";
import { useAppContext } from "../../context/AppContextProvider";
import { useReducer } from "react";
import "./AddBudgetModal.css";
import Card from "../Card/Card";
import { appStateCmd } from "../../reducers/appStateReducer";
import Form from "../Form/Form";
import Button from "../Button/Button";
import { budgetsCmd } from "../../reducers/budgetsReducer";
import { useEffect } from "react";

function AddBudgetModal() {
  const { appState, appStateDispatch, budgetsDispatch } = useAppContext();
  const [form, formDispatch] = useReducer(
    addBudgetFormReducer,
    budgetFormState
  );

  function handleOverlayClick(e) {
    e.preventDefault();
    appStateDispatch({ type: appStateCmd.toggleAddBudget });
    formDispatch({ type: "cancel" });
  }
  function handleExitButton(e) {
    e.preventDefault();
    appStateDispatch({ type: appStateCmd.toggleAddBudget });
    formDispatch({ type: "clearAllInput" });
  }

  function handleClearButton(e) {
    e.preventDefault();
    formDispatch({ type: "clearAllInput" });
  }

  function handleCreateBudget(e) {
    e.preventDefault();
    formDispatch({ type: "create" });
  }

  useEffect(() => {
    if (!form.create) return;

    budgetsDispatch({
      type: budgetsCmd.add,
      payload: { name: form.name, amount: form.amount },
    });

    formDispatch({ type: "clearAllInput" });
    appStateDispatch({ type: appStateCmd.toggleAddBudget });
  }, [form.create]);

  function handleKeyChange(e) {
    formDispatch({
      type: "input",
      payload: { key: e.target.name, input: e.target.value },
    });
  }

  function handleClearInput(name) {
    formDispatch({ type: "clearInput", payload: name });
  }

  return (
    <Modal
      hasOverlay="true"
      visibility={appState.addBudgetActive ? "show" : "hidden"}
      overlayClick={handleOverlayClick}
      from="top"
      position="center"
    >
      <Card width="300px" roundedCorner="true">
        <Card.Header justify="center">
          <Card.Title>Add Budgets</Card.Title>
        </Card.Header>
        <Card.HorizontalRule />
        <Form>
          <Card.Content>
            <Form.InputGroup>
              <Form.Label>
                <Form.LabelText>Name</Form.LabelText>
                <Form.InputText
                  name="name"
                  onChange={handleKeyChange}
                  onClear={handleClearInput}
                  value={form.name}
                  autoFocus
                />
              </Form.Label>
              {form.nameError ? (
                <Form.Text color="red" fontSize="10px">
                  please input required name
                </Form.Text>
              ) : null}
            </Form.InputGroup>
            <Form.InputGroup>
              <Form.Label>
                <Form.LabelText>Amount</Form.LabelText>
                <Form.InputNumber
                  min="0"
                  name="amount"
                  onChange={handleKeyChange}
                  onClear={handleClearInput}
                  value={form.amount}
                  autocomplete="false"
                />
              </Form.Label>
              {form.amountError ? (
                <Form.Text color="red" fontSize="10px">
                  please input required amount
                </Form.Text>
              ) : null}
            </Form.InputGroup>
          </Card.Content>
          <Card.Footer justify="center" align="center">
            <Button variant="primary" onClick={handleCreateBudget}>
              Create
            </Button>
            <Button
              padding=".5em 1em"
              fontSize="11px"
              variant="secondary-outline"
              style={{ borderWidth: "1px", order: "-1" }}
              onClick={handleClearButton}
              className="btn-clear-all"
            >
              Clear All
            </Button>
            <Button
              padding=".4em 1em"
              fontSize="12px"
              variant="secondary-outline"
              style={{ borderWidth: "1px" }}
              onClick={handleExitButton}
              className="btn-exit"
            >
              Exit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Modal>
  );
}

//Input fields state
const budgetFormState = {
  name: "",
  amount: "",
  nameError: false,
  amountError: false,
  create: false,
};
//needs to have an input field checking

function addBudgetFormReducer(state, action) {
  const payload = action.payload;

  switch (action.type) {
    case "input":
      //payload = {key: string, input: string}
      return {
        ...state,
        [payload.key]: payload.input,
        [`${payload.key}Error`]: false,
      };
    case "create":
      if (!state.name.trim() || !state.amount.trim()) {
        return {
          ...state,
          nameError: state.name.toLowerCase() ? false : true,
          amountError: state.amount ? false : true,
        };
      } else {
        return {
          ...state,
          create: true,
        };
      }

    case "cancel":
      return {
        ...state,
        nameError: false,
        amountError: false,
        create: false,
        error: false,
      };

    case "clearInput":
      return {
        ...state,
        [payload]: "",
      };

    case "clearAllInput":
      return {
        name: "",
        amount: "",
        nameError: false,
        amountError: false,
        create: false,
        error: false,
      };
    default:
      return state;
  }
}

export default AddBudgetModal;
