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

  const [queryParams, setQueryParams] = useSearchParams();
  const paramsUrl = queryParams.get("type");
  console.log(paramsUrl)
  console.log(queryParams.toString())
  let vansElements;
  if(state){
    vansElements = paramsUrl
    ? vansData.filter((van) => van.type.toLowerCase() === paramsUrl)
    : vansData;
  }
  
  const btnStyle = {
    backgroundColor: paramsUrl === "simple" ? "#E17654" : paramsUrl === "Luxury" ? "#161616" : 
    paramsUrl === "Rugged" ? "#115E59" : "#FFEAD0",
    color: paramsUrl ? "#ffffff" : "black"
  }

  const handleFilter = (key, value) => {
    setQueryParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };

  return (
    <div className="vans-box">
      <h1>Explore our van options</h1>
      <div className="sorting-box">
        <button
          onClick={() => handleFilter("type", "simple")}
          className="btn simple"
        >
          Simple
        </button>
        <button
          onClick={() => handleFilter("type", "luxury")}
          className="btn luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilter("type", "rugged")}
          className="btn rugged"
        >
          Rugged
        </button>
        {paramsUrl ? (
          <button
            onClick={() => handleFilter("type", null)}
            className="btn clear-all"
          >
            Clear
          </button>
        ) : (
          null
        )}
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
              <Link
                state={{ search: queryParams.toString() }}
                key={van.id}
                to={`/vans/${van.id}`}
                style={{ display: "inline-block" }}
              >
                <div className="van-box">
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
