import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Dashboard.css"

const Dashboard = ()=> {
    const [] = useState();
    const [] = useEffect();

    const iconStyle = {
        color: "#FF8C38",
        marginRight: "0.5em",
        marginLeft: "1em"
    }

    const boldLine = {
        textDecoration: "underline",
        fontWeight: "bolder",
    }

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
                {}
            </div>
        </div>
    )
}

export default Dashboard;