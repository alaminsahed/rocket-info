import React, { useEffect } from "react";
import Card from "../Component/Card";
import Filter from "../Component/Filter";
import Search from "../Component/Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../slice/homeSlice";

const Home = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      <Search />
      <div className="row">
        <div className="col-md-2 mt-3">
          <Filter />
        </div>
        <div className="col-md-10 mt-3">
          {/* <Card data={data}/> */}
          <div className="row">
            {data.rocketsData.rocketData.map((data) => (
              <Card key={data.mission_name} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
