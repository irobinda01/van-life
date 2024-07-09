import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom"
import "./Layout.css"

const Layout = () => {
    return(
        <div>
            <nav>
                <Link to="/"><h1>#VANLIFE</h1></Link>
                <div className="links">
                    <NavLink to="host">Host</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="vans">Vans</NavLink>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;