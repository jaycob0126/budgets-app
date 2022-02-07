import "./ConfirmDeleteModal.css";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useAppContext } from "../../context/AppContextProvider";

export default function ConfirmDeleteModal({
  name,
  visibility,
  answer,
  setAnswer,
  setConfirmDelete,
}) {
  function handleYesButton() {
    setAnswer(true);
    setConfirmDelete(false);
  }

  function handleNoButton() {
    setAnswer(false);
    setConfirmDelete(false);
  }

  function handleOverlayClick() {
    setAnswer(false);
    setConfirmDelete(false);
  }

  return (
    <>
      <Modal
        visibility={`${visibility ? "show" : "hidden"}`}
        from="top"
        position="center"
        hasOverlay={true}
        overlayClick={handleOverlayClick}
      >
        <Card width="300px" gap="1.5em" roundedCorner={true}>
          <Card.Title style={{ textAlign: "center" }}>
            {`Are you sure to delete the ${name} budget?`}
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
