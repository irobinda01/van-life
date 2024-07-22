import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Host.css";

const Host = () => {
    return(
        <div className="host-box">
            <nav className="host-nav-box">
                <NavLink 
                    to="."
                    end
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            backgroundColor: isActive ? "#FFDDB2" : "#FFEAD0",
                        })
                    }}
                >Dashboard</NavLink>
                <NavLink 
                    to="income"
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            backgroundColor: isActive ? "#FFDDB2" : "#FFEAD0",
                        })
                    }}
                >Income</NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            backgroundColor: isActive ? "#FFDDB2" : "#FFEAD0",
                        })
                    }}
                >Vans</NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            backgroundColor: isActive ? "#FFDDB2" : "#FFEAD0",
                        })
                    }}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Host;