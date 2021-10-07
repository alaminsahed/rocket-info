import React from "react";
import Card from "../Component/Card";
import Filter from "../Component/Filter";
import Search from "../Component/Search";

const Home = () => {
  return (
    <div className="container">
      <Search />
      <div className="row">
        <div className="col-md-2 mt-3">
          <Filter/>
        </div>
        <div className="col-md-10 mt-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
