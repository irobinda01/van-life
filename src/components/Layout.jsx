import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom"
import "./Layout.css"

const Layout = () => {
    const [burger_class, sertBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = ()=>{
        if(!isMenuClicked){
            sertBurgerClass("burger-bar clicked")
            setMenuClass("menu vissable")
        }
        else{
            sertBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div>
            <nav>
                <Link to="/"><h1>#VANLIFE</h1></Link>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <div className={menu_class}>
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