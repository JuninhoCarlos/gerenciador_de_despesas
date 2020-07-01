import React from "react"
import {
    BrowserRouter as Router
} from "react-router-dom"

import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import MainContent from "./components/MainContent"

import './styles/dashboard.css'


function App() {

    return (
        <Router>
            <NavBar />

            <div className="container-fluid">
                <SideBar />
                <MainContent />
            </div>


        </Router>
    )
}

export default App