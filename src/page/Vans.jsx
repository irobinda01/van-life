import React, { useState, useEffect } from "react";
import "./Vans.css"

const Vans = ()=> {
    const [vansData, setVansData] = useState(null);
    const [state, setState] = useState(false);

    const getData = async ()=> {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setVansData(data.vans);
        setState(true);
        console.log(data.vans);
    }

    useEffect(()=>{
        getData();
    }, [])

    return (
        <div className="vans-box">
            <h1>Explore our van options</h1>
            <div style={{width: "100%"}} className="van-container">
                {
                    vansData ? (
                        vansData.map((van)=> {
                            return(
                                <div key={van.id} className="van-box">
                                    <img src={van.imageUrl}/>
                                    <div>
                                        <h3>{van.name}</h3>
                                        <h3>${van.price}</h3>
                                    </div>
                                    <p>/day</p>
                                    <button>{van.type}</button> 
                                </div>
                            )
                        })
                    ) : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default Vans;