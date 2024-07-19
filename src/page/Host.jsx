import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Host.css";

const Host = () => {
    return(
        <div className="host-box">
            <nav className="host-nav-box">
                <NavLink 
                    to="."
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            textDecoration: isActive ? "underline" : "",
                        })
                    }}
                >Dashboard</NavLink>
                <NavLink 
                    to="income"
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            textDecoration: isActive ? "underline" : "",
                        })
                    }}
                >Income</NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            textDecoration: isActive ? "underline" : "",
                        })
                    }}
                >Vans</NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive})=>{
                        return({
                            fontWeight: isActive ? "bolder" : "",
                            textDecoration: isActive ? "underline" : "",
                        })
                    }}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Host;