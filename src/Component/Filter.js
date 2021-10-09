import React from "react";
import { Dropdown } from "react-bootstrap";

const Filter = ({data, setResult}) => {

  const filterLaunchingStatus= (result)=>{
  const a =  data.filter(rocket=>String(rocket.launch_success)=== result );
  setResult(a);
  }

  return (
    <div>
      <div className="card bg-dark bg-opacity-50 text-white border-white">
        <div className="card-body">
          <h6>Filter Your Information</h6>
          <Dropdown className="pt-5">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
            Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>filterLaunchingStatus("true")}>Success</Dropdown.Item>
              <Dropdown.Item onClick={()=>filterLaunchingStatus("false")}>Failure</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Filter;
