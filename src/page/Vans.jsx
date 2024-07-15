import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Vans.css";

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

  return (
    <div className="vans-box">
      <h1>Explore our van options</h1>
      <div style={{ width: "100%" }} className="van-container">
        {vansData ? (
          vansData.map((van) => {
            let backColor =
              van.type === "simple"
                ? "#E17654"
                : van.type === "rugged"
                ? "#115E59"
                : "#161616";

            return (
              <div key={van.id} className="van-box">
                <img src={van.imageUrl} />
                <div className="vans-writeUp">
                  <div className="vans-text">
                    <h2>{van.name}</h2>
                    <button style={{ backgroundColor: backColor, width: "65%" }}>
                      {van.type}
                    </button>
                  </div>
                  <div className="vans-price">
                    <p>${van.price}</p>
                    <p>/day</p>
                  </div>
                </div>
              </div>
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
