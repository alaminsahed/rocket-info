import React, { useEffect, useState } from "react";
import Card from "../Component/Card";
import Filter from "../Component/Filter";
import Search from "../Component/Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../slice/homeSlice";
import {rocketDataLocal} from './rocketData'

const Home = () => {

  const [key, setKey] = useState(" ");
  const [result, setResult] = useState([]);
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  let { loading, rocketData } = data.rocketsData;
  

  const searchHandler = (keyword) => {
    setKey(keyword);
    const a = rocketDataLocal.filter(rocket => {
      console.log('keyword', keyword);
      console.log('rocket.rocket.rocket_name', rocket.rocket.rocket_name.toLowerCase())
      console.log('includes', rocket.rocket.rocket_name.toLowerCase().includes(keyword))
      return rocket.rocket.rocket_name.toLowerCase().includes(keyword)
    });
    console.log('a', a);
    setResult(a);
  
  }


console.log(result);
  // const filterValue = (searchTerm) => {
  //   console.log(searchTerm);
  //   setFilteredData(rocketData?.filter(rocket => rocket.rocket.rocket_name.includes("Falcon 1")))
  // }




  return (
    <div className="container">
      <div className="container">

        <Search keyword={key} searchHandler={searchHandler}  />
      </div>
      <div className="row">
        <div className="col-md-2 mt-3">
          <Filter />
        </div>
        <div className="col-md-10 mt-3">
          {/* <Card data={data}/> */}
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              {
              // result?(
              //   result.map((data)=>(
              //     <Card key={data.mission_name} data={data} />
              //   ))
              // ):
              rocketData.map((data) => (
                <Card key={data.mission_name} data={data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
