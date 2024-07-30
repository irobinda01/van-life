import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./HostVans.css"

const HostVans = ()=> {
    const [vansData, setVansData] = useState(null);
    const [gotten, setGotten] = useState(false)

    const getData = async()=> {
        const response = await fetch("/api/vans");
        const data = await response.json();
        setVansData(data.vans);
        setGotten(true);
    }

    useEffect(()=> {
        getData();
    }, [])

    if(gotten){
        console.log(vansData)
    }

    const vansContainer = gotten ? (
        vansData.map(van => {
            return(
                <Link className="host-vans-box">
                    <img src={van.imageUrl}/>
                    <div>
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </Link>
            )
        })
    ) : <h1>Loading...</h1>

    return(
        <div className="host-vans-container">
            <h1>Your listed vans</h1>
            <div>{vansContainer}</div>
        </div>
    )
}

export default HostVans;