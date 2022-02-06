import BudgetsCard from "./components/BudgetsCard/BudgetsCard";
import FilterSearch from "./components/FilterSearch/FilterSearch";
import Header from "./components/Header/Header";
import Flex from "./components/utils/Flex/Flex";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <FilterSearch />
        <Flex direction="column" align="center">
          <BudgetsCard />
        </Flex>
      </div>
    </>
  );
}

export default App;
