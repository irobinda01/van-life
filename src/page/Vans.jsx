import React, { useState, useEffect } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import "./Vans.css";
//import { type } from "@testing-library/user-event/dist/type";

const Vans = () => {
  const [vansData, setVansData] = useState(null);
  const [state, setState] = useState(false);

  const getData = async () => {
    const response = await fetch("/api/vans");
    const data = await response.json();
    setVansData(data.vans);
    setState(true);
    console.log(data.vans);
  };

  useEffect(() => {
    getData();
  }, []);

  const [queryParams, setQueryParams] = useSearchParams()
  const paramsUrl = queryParams.get("type")
  //console.log(paramsUrl)
  const vansElements = paramsUrl ? vansData.filter(van => van.type.toLowerCase() === paramsUrl) : 
  vansData


  return (
    <div className="vans-box">
      <h1>Explore our van options</h1>
      <div className="sorting-box">
        <NavLink to="?type=simple"><button>Simple</button></NavLink>
        <NavLink to="?type=luxury"><button>Luxury</button></NavLink>
        <NavLink to="?type=rugged"><button>Rugged</button></NavLink>
        <Link to="." className="clear-all">Clear filter</Link>
      </div>
      <div style={{ width: "100%" }} className="van-container">
        {state ? (
          vansElements.map((van) => {
            let backColor =
              van.type === "simple"
                ? "#E17654"
                : van.type === "rugged"
                ? "#115E59"
                : "#161616";

            return (
              <Link key={van.id} to={`/vans/${van.id}`} style={{display: "inline-block"}}>
                <div  className="van-box">
                  <img src={van.imageUrl} />
                  <div className="vans-writeUp">
                    <div className="vans-text">
                      <h2>{van.name}</h2>
                      <button
                        style={{ backgroundColor: backColor, width: "65%" }}
                      >
                        {van.type}
                      </button>
                    </div>
                    <div className="vans-price">
                      <p>${van.price}</p>
                      <p>/day</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Vans;
