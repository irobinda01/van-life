import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./page/Home";
import Host from "./page/Host";
import About from "./page/About";
import Vans from "./page/Vans";

const App = () => {
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="host" element={<Host />}/>
                <Route path="about" element={<About />} />
                <Route path="vans" element={<Vans />} />
            </Route>
        </Routes>
       </BrowserRouter>
    )
}

export default App;