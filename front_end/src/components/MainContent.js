import React from "react"

import {
    Switch,
    Route
} from "react-router-dom";

import Dashboard from "./Dashboard";
import CadastroGasto from "./CadastroGasto"

function MainContent() {
    return (
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">            
            
            <Switch>
                <Route path="/about">
                    <h1>About</h1>
                </Route>

                <Route path="/cadastro-gasto">
                    <CadastroGasto />
                </Route>

                <Route path="/">
                    <Dashboard />
                </Route>

            </Switch>

        </main>
    )
}

export default MainContent