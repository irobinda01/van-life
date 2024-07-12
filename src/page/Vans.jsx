import React, { useState, useEffect } from "react";

const Vans = ()=> {
    const [vansData, setVansData] = useState(null)

    const getData = async ()=> {
        const response = await fetch("/api/vans");
        const data = await response.json();
        console.log(data.vans);
    }

    getData();


    return (
        <div className="vans-box">
            <h1>The vans page</h1>
        </div>
    )
}

export default Vans;