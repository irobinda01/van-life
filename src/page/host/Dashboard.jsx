import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Dashboard.css"

const Dashboard = ()=> {
    const [vans, setVans] = useState(null);

    const iconStyle = {
        color: "#FF8C38",
        marginRight: "0.5em",
        marginLeft: "1em"
    }

    const boldLine = {
        textDecoration: "underline",
        fontWeight: "bolder",
    }

    const getData = async () => {
        const response = await fetch("api/vans")
        const data = await response.json()
        setVans(data.vans);
    }

    useEffect(()=>{
        getData();
    }, [])

    if(vans){
        console.log(vans);
    }
    const vanTemplate = vans ? vans.map((van) =>{
        return(
            <div className="dashboard-van-box">
                <img src={van.imageUrl}/>
                <div className="overall">
                    <div className="dashboard-van-text">
                        <h1>{van.name}</h1>
                        <p>Edit</p>
                    </div>
                    <h2>${van.price}/day</h2>
                </div>
            </div>
        )
    }) : <h1>Loading...</h1>

    return(
        <div className="dashboard-box">
            <div className="section-1">
                <h1>Welcome!</h1>
                <ul>
                    <li>Income last <span style={boldLine}>30 days</span></li>
                    <li>Details</li>
                </ul>
                <h1>$2,260</h1>
            </div>
            <ul className="section-2">
                <li style={{fontWeight: "bolder"}}><span>Review score</span> <FaStar style={iconStyle}/>5.0/<span style={{color: "#4D4D4D"}}>5</span></li>
                <li>Details</li>
            </ul>
            <div className="section-3">
                <ul>
                    <li><h2>Your listed vans</h2></li>
                    <li>View all</li>
                </ul>
                <div className="dashboard-vans-container">
                    {vanTemplate}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;