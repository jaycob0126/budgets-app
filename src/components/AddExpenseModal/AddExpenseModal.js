import Modal from "../Modal/Modal";
import { useAppContext } from "../../context/AppContextProvider";

import "./AddExpenseModal.css";
import Card from "../Card/Card";
import { appStateCmd } from "../../reducers/appStateReducer";
import Form from "../Form/Form";
import Button from "../Button/Button";
import Flex from "../utils/Flex/Flex";
import { useReducer } from "react";
import { useEffect } from "react";

function AddExpenseModal() {
  const { appState, appStateDispatch } = useAppContext();
  const [form, formDispatch] = useReducer(formEpenseReducer, formState);

  useEffect(() => {
    console.log(appState.activeBudget);
    if (!appState.activeBudget.name) {
      formDispatch({
        type: "setBudget",
        payload: { input: "Please a budget..." },
      });
      return;
    }

    formDispatch({
      type: "setBudget",
      payload: {
        input: appState.activeBudget.name,
        budget: appState.activeBudget,
      },
    });
  }, [appState.activeBudget]);

  useEffect(() => {
    if (!appState.activeCategory.name) {
      formDispatch({
        type: "setCategory",
        payload: { input: "Category..." },
      });
      return;
    }

    formDispatch({
      type: "setCategory",
      payload: {
        input: appState.activeCategory,
        budget: appState.activeCategory,
      },
    });
  }, [appState.activeCategory]);

  function toggleAddExpense(e) {
    e.preventDefault();
    appStateDispatch({ type: appStateCmd.toggleAddExpense });
  }

  function handleCreateButton(e) {
    e.preventDefault();
  }

  function handleClearButton(e) {
    e.preventDefault();
    formDispatch({ type: "clearAllInput" });
  }

  function handleInputChange(e) {
    const key = e.target.name;
    formDispatch({ type: "input", payload: { key, value: e.target.value } });
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
        <Form>
          <Card.Content>
            <Form.Label>
              <Form.LabelText>Name</Form.LabelText>
              <Form.InputText
                name="name"
                onChange={handleInputChange}
                value={form.name.input}
              />
            </Form.Label>
            <Form.Label>
              <Form.LabelText>Amount</Form.LabelText>
              <Form.InputNumber
                name="amount"
                min="0"
                step="0.01"
                onChange={handleInputChange}
                value={form.amount.input}
              />
            </Form.Label>
            <Flex direction="row" gap="8px" justify="space-between">
              <Form.Label fontSize=".8em">
                <Form.LabelText>Budget</Form.LabelText>
                <Form.InputText
                  width="80px"
                  fontSize=".6em"
                  onChange={handleInputChange}
                  name="budget"
                  value={form.budget.input}
                />
              </Form.Label>
              <Form.Label fontSize=".8em">
                <Form.LabelText>Category</Form.LabelText>
                <Form.InputText
                  width="80px"
                  fontSize=".6em"
                  onChange={handleInputChange}
                  name="category"
                  value={form.category.input}
                  placeholder="Category"
                />
              </Form.Label>
            </Flex>
          </Card.Content>
          <Card.Footer justify="center" align="center">
            <Button variant="primary" onClick={handleCreateButton}>
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
              onClick={toggleAddExpense}
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

const formState = {
  name: {
    input: "",
    error: false,
  },
  amount: {
    input: "",
    error: false,
  },
  budget: {
    input: "",
    selected: {},
  },
  category: {
    input: "",
    selected: {},
  },
};

function formEpenseReducer(state, action) {
  const payload = action.payload;

  switch (action.type) {
    case "input":
      //payload = {key:string, value: string}
      return {
        ...state,
        [payload.key]: { ...state[payload.key], input: payload.value },
      };

    case "checkInput":
      return;

    case "clearAllInput":
      return {
        ...state,
        name: { input: "", error: false },
        amount: { input: "", error: false },
      };
    case "setBudget":
      //payload: activeBudgetObject
      return {
        ...state,
        budget: { input: payload.input, selected: payload.budget },
      };
    case "setCategory":
      //payload: activeBudgetCategory
      return {
        ...state,
        category: { input: payload.input, selected: payload.category },
      };
    case "clearInput":
      //payload=key
      return { ...state, [payload]: { input: "", error: false } };
    case "cancel":
      return state;

    default:
      break;
  }
}

export default AddExpenseModal;
