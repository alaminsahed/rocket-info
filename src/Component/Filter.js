import React from "react";
import { Dropdown } from "react-bootstrap";

const Filter = () => {
  return (
    <div>
      <div className="card bg-dark bg-opacity-50 text-white border-white">
        <div className="card-body">
          <h6>Filter Your Information</h6>
          <Dropdown className="pt-5">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Filter;
