import React from "react";
import './app.scss';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Header from "./Components/Header/Header";
import { useState } from "react"; 

function App() {
    const [token, setToken] = useState(localStorage.getItem("storedToken"));

    return (
        <div>
                {!token && 
                    <Switch>
                        <Route exact path="/">
                            <Login setToken={setToken}></Login>
                        </Route>
                        <Redirect from="/dashboard" to="/"/>
                    </Switch>
                    } 
                {token && 
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard setToken={setToken}></Dashboard>    
                        </Route>
                        <Redirect from="/" to="/dashboard"/>
                    </Switch>
                } 
        </div>
     );
}

export default App;