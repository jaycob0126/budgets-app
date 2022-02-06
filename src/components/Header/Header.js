import React from "react";
import "./Header.scss";
import { Button, ButtonGroup, Dropdown, Stack } from "react-bootstrap";
import Select from "react-select";

export default function Header() {
  return (
    <div className="header">
      <div>
        <div className="d-flex flex-direction-row">
          <h1 className="me-auto">
            Bud<span className="text-danger">Get</span>
          </h1>
          <div className="vr" />
          <Button variant="primary" size="sm" className="">
            Add Budget
          </Button>
          <Button variant="outline-secondary" size="lg">
            Add Expense
          </Button>
        </div>
        <Stack direction="horizontal" gap={2} className="mt-2 mb-2">
          <Select
            styles={{
              control: (state) => {
                return { ...state, width: "10em" };
              },
              menu: (state) => {
                return { ...state };
              },
            }}
            options={[
              { value: "1", label: "Home Budget" },
              { value: "2", label: "School Budget" },
              { value: "3", label: "Work Budget" },
            ]}
          ></Select>
          <Dropdown className="ms-auto " align="end">
            <Dropdown.Toggle variant="outline-secondary" size="sm">
              Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.ItemText>Sort by...</Dropdown.ItemText>
              <Dropdown.Item>Categories</Dropdown.Item>
              <Dropdown.Item>Name</Dropdown.Item>
              <Dropdown.Item>Amount</Dropdown.Item>
              <Dropdown.Item>Date</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup} align="end">
            <Dropdown.Toggle variant="outline-secondary" size="sm">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.ItemText>Select Filter...</Dropdown.ItemText>
              <Dropdown.Item>Category</Dropdown.Item>
              <Dropdown.Item>Color</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
        <hr className="mt-0" />
      </div>
    </div>
  );
}
