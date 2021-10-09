import React from "react";
import { Dropdown } from "react-bootstrap";

const Filter = ({data, setResult}) => {

  //LaunchingStatus
  const filterLaunchingStatus= (result)=>{
  const a =  data.filter(rocket=>String(rocket.launch_success)=== result );
  
  setResult(a);
  }

  //upcoming
  const filterUpcoming =(result)=>{
   
    const a = data.filter(rocket=>String(rocket.upcoming)=== result)
    setResult(a);
  }

  //date
  const filterTime = (result)=>{
    const currentYear = new Date().getFullYear();
    const a = data.filter(rocket=> rocket.launch_year === currentYear-1)
    console.log(a);
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

          <Dropdown className="pt-5">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
            upcoming
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>filterUpcoming("true")}>True</Dropdown.Item>
              <Dropdown.Item onClick={()=>filterUpcoming("false")}>False</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="pt-5">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
            Time
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={filterTime}>Last Year</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Filter;
