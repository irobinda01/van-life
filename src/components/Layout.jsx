import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <div>
            <Link to="/"><h1>#VANLIFE</h1></Link>
            <nav>
                <NavLink to="host">Host</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="vans">Vans</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;