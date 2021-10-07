import React from "react";

const Card = (props) => {
  console.log(props.data.upcoming);
  const { mission_name, flight_number, rocket, launch_year, upcoming } =
    props.data;

  return (
   
      <div className="col-4">
      <div className="card mt-2 mb-2" style={{height:"16rem"}}>
        <div className="card-body">
          <h4>Mission Name: {mission_name}</h4>
          <p>Fight No:{flight_number}</p>
          <p>Rocket Name:{rocket.rocket_name}</p>
          <p>Launch Year:{launch_year}</p>
        </div>
      </div>
     
    </div>
  );
};

export default Card;
