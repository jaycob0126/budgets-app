import "./ConfirmDeleteModal.css";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useAppContext } from "../../context/AppContextProvider";
import { appStateCmd } from "../../reducers/appStateReducer";
import { budgetsCmd } from "../../reducers/budgetsReducer";

export default function ConfirmDeleteModal() {
  const { appState, appStateDispatch } = useAppContext();
  const { budgetsDispatch } = useAppContext();

  function handleYesButton() {
    appStateDispatch({ type: appStateCmd.toggleDeleteBudget, payload: true });
    budgetsDispatch({
      type: budgetsCmd.delete,
      payload: appState.activeBudget.id,
    });
    //TODO
    //expensesDispatch({type:uncategorizeExpense, payload: appState.activeBudget.id})
  }

  function handleNoButton() {
    appStateDispatch({ type: appStateCmd.toggleDeleteBudget, payload: false });
  }

  function handleOverlayClick() {
    appStateDispatch({ type: appStateCmd.cancelDeleteBudget });
  }

  return (
    <>
      <Modal
        visibility={`${appState.deleteBudgetActive ? "show" : "hidden"}`}
        from="top"
        position="center"
        hasOverlay={true}
        overlayClick={handleOverlayClick}
      >
        <Card width="300px" gap="1.5em" roundedCorner={true}>
          <Card.Title style={{ textAlign: "center" }}>
            {`Are you sure to delete the ${appState.activeBudget.name} budget?`}
          </Card.Title>
          <Card.Footer justify="center" align="center">
            <Button
              variant="primary"
              padding=".3em 2em"
              onClick={handleNoButton}
            >
              No
            </Button>
            <Button
              variant="secondary-outline"
              padding=".2em 2em"
              onClick={handleYesButton}
            >
              Yes
            </Button>
          </Card.Footer>
        </Card>
      </Modal>
    </>
  );
}
