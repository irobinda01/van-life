import React from "react";
import { FaStar } from "react-icons/fa";
import "./Dashboard.css"

const Dashboard = ()=> {
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
                    <li>Income last <span style={{color: "#4D4D4D"}}>30 days</span></li>
                    <li>Details</li>
                </ul>
                <h1>$2,260</h1>
            </div>
            <ul className="section-2">
                <li><span>Review score</span> <FaStar style={iconStyle}/><span>5.0/</span>5</li>
                <li>Details</li>
            </ul>
            <div>
                <ul>
                    <li>Your listed vans</li>
                    <li>View all</li>
                </ul>
                {}
            </div>
        </div>
    )
}

export default Dashboard;