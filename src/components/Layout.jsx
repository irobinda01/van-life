import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer";
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

    const styles = {
        textDecoration: "underline",
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
                <NavLink 
                    to="host"
                    style={({isActive})=> isActive ? styles : null}
                >Host</NavLink>
                <NavLink 
                    to="about"
                    style={({isActive})=> isActive ? styles : null}
                >About</NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive})=> isActive ? styles : null}
                >Vans</NavLink>
            </div>
            <main className={outlet_container}>
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout;