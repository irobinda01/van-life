import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom"
import "./Layout.css"

const Layout = () => {
    const [burger_class, sertBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuUnclicked, setIsMenuUnclicked] = useState(true)
    const [outlet_container, setOutletContainer] = useState("outlet-container")

    const updateMenu = ()=>{
        if(isMenuUnclicked){
            sertBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setOutletContainer("outlet-container outlet-down")
        }
        else{
            sertBurgerClass("burger-bar unclicked")
            setMenuClass("menu")
            setOutletContainer("outlet-container outlet-up")
        }
        setIsMenuUnclicked(!isMenuUnclicked)
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
            </nav>
            <div className={menu_class}>
                <NavLink to="host">Host</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="vans">Vans</NavLink>
            </div>
            <main className={outlet_container}>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;