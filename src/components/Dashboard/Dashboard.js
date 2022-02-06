import Card from "../Card/Card";
import "./Dashboard.css";

function Dashboard({ hidden }) {
  return (
    <>
      <div
        className={`
          ${hidden ? "" : "hidden"}
        container-dashboard
      `}
      >
        <Card>
          <Card.Title>Dashboard</Card.Title>
          <Card.Content></Card.Content>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;