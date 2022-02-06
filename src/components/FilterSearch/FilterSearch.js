import Select from "react-select";
import Container from "../utils/Container/Container";
import Flex from "../utils/Flex/Flex";
import "./FilterSearch.css";

const searchStyle = {
  control: (style) => {
    return {
      ...style,
      minWidth: "210px",
      height: "25px",
    };
  },
};

const filterStyle = {
  control: (style) => {
    return { ...style, width: "118px", height: "25px" };
  },
};

const searchOption = [
  { value: "search option 1", label: "search option 1" },
  { value: "search option 2", label: "search option 2" },
  { value: "search option 3", label: "search option 3" },
  { value: "search option 4", label: "search option 4" },
];

const filterOption = [
  { value: "filter option 1", label: "filter option 1" },
  { value: "filter option 2", label: "filter option 2" },
  { value: "filter option 3", label: "filter option 3" },
  { value: "filter option 4", label: "filter option 4" },
];

function FilterSearch() {
  return (
    <>
      <Container margin="1px" padding="15px">
        <Flex gap="14px" justify="space-between">
          <Select styles={searchStyle} options={searchOption}></Select>
          <Select styles={filterStyle} options={filterOption}></Select>
        </Flex>
      </Container>
    </>
  );
}

export default FilterSearch;
