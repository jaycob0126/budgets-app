import { useState } from "react";
import BudgetsCard from "./components/BudgetsCard/BudgetsCard";
import FilterSearch from "./components/FilterSearch/FilterSearch";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Flex from "./components/utils/Flex/Flex";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <FilterSearch />
        </div>
        <Modal hasOverlay={true} visibility="hidden" from="top" position="top">
          Add Budget
        </Modal>
        <Flex direction="column" align="center">
          <BudgetsCard />
        </Flex>
      </div>
    </>
  );
}

export default App;
