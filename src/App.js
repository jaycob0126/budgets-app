import AddBudgetModal from "./components/AddBudgetModal/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal/AddExpenseModal";
import BudgetsCard from "./components/BudgetsCard/BudgetsCard";
import FilterSearch from "./components/FilterSearch/FilterSearch";
import Header from "./components/Header/Header";
import Flex from "./components/utils/Flex/Flex";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <FilterSearch />
        </div>
        <AddBudgetModal />
        <AddExpenseModal />
        <Flex direction="column" align="center">
          <BudgetsCard />
        </Flex>
      </div>
    </>
  );
}

export default App;
