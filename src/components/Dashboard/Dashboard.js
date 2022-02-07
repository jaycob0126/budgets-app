import { useEffect, useRef } from "react";
import Card from "../Card/Card";
import "./Dashboard.css";

function Dashboard({ hidden }) {
  const dashboard = useRef();

  useEffect(() => {
    if (hidden) {
      dashboard.current.classList.remove("hidden");
    } else {
      dashboard.current.classList.add("hidden");
    }
  }, [hidden]);

  return (
    <>
      <div ref={dashboard} className="hidden container-dashboard">
        <Card bgColor="#f7f7f7">
          <Card.Title>Dashboard</Card.Title>
          <Card.Content></Card.Content>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
