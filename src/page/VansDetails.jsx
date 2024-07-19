import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import "./VansDetails.css";

const VansDetails = () => {
  const [details, setDetails] = useState(null);
  const [state, setState] = useState(false);
  const params = useParams();
  const id = params.id;
  console.log(id);

  const getData = async () => {
    const response = await fetch(`/api/vans/${id}`);
    const data = await response.json();
    setDetails(data.vans);
    setState(true);
    console.log(data.vans);
  };

  useEffect(() => {
    getData();
  }, []);

  let backColor;
  if (state) {
    backColor =
      details.type === "simple"
        ? "#E17654"
        : details.type === "rugged"
        ? "#115E59"
        : "#161616";
  }

  return (
    <div className="vans-details-box">
      <Link to=".." relative="path" style={{ textDecoration: "underline" }}>
        <GoArrowLeft />
        <p className="goBack">Back to all vans</p>
      </Link>
      {details ? (
        <div>
          <img src={details.imageUrl} />
          <button style={{ backgroundColor: backColor }}>{details.type}</button>
          <h2>{details.name}</h2>
          <div className="vans-details-text">
            <h3>
              ${details.price}
              <span className="vans-details-lighter">/day</span>
            </h3>
          </div>
          <p>{details.description}</p>
          <button className="boke-button">Rent this van</button>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default VansDetails;
