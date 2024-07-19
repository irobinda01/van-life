import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./page/Home";
import Host from "./page/Host";
import About from "./page/About";
import Vans from "./page/Vans";
import VansDetails from "./page/VansDetails";
import Dashboard from "./page/host/Dashboard";
import HostVans from "./page/host/HostVans";
import Income from "./page/host/Income";
import Reviews from "./page/host/Reviews";
import "./App.css"
import "./server";

const App = () => {
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="vans" element={<Vans />} />
                <Route path="vans/:id" element={<VansDetails />}/>
                <Route path="host" element={<Host />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="income" element={<Income />}/>
                    <Route path="reviews" element={<Reviews />}/>
                    <Route path="vans" element={<HostVans />}/>
                </Route>
            </Route>
        </Routes>
       </BrowserRouter>
    )
}

export default App;